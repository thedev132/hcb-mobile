import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { useTheme, useNavigation } from "@react-navigation/native";
import { useStripeTerminal } from "@stripe/stripe-terminal-react-native";
import * as Device from "expo-device";
import groupBy from "lodash/groupBy";
import { useEffect, useMemo, useState } from "react";
import {
  Text,
  View,
  ActivityIndicator,
  SectionList,
  TouchableHighlight,
  Platform,
} from "react-native";
import useSWR, { mutate } from "swr";

import Button from "../../../components/Button";
import MockTransaction, {
  MockTransactionType,
} from "../../../components/MockTransaction";
import { EmptyState } from "../../../components/organizations/EmptyState";
import { LoadingSkeleton } from "../../../components/organizations/LoadingSkeleton";
import PlaygroundBanner from "../../../components/organizations/PlaygroundBanner";
import TapToPayBanner from "../../../components/organizations/TapToPayBanner";
import Transaction from "../../../components/Transaction";
import { logError } from "../../../lib/errorUtils";
import MockTransactionEngine from "../../../lib/organization/useMockTransactionEngine";
import useTransactions from "../../../lib/organization/useTransactions";
import Organization, {
  OrganizationExpanded,
} from "../../../lib/types/Organization";
import ITransaction, {
  TransactionType,
  TransactionWithoutId,
} from "../../../lib/types/Transaction";
import { useOffline } from "../../../lib/useOffline";
import { palette } from "../../../theme";
import { renderDate, renderMoney } from "../../../util";

interface TransactionsTabProps {
  orgId: string;
  organization?: Organization | OrganizationExpanded;
}

function addPendingFeeToTransactions(
  transactions: ITransaction[],
  organization: Organization | OrganizationExpanded | undefined,
): TransactionWithoutId[] {
  if (
    transactions.length > 0 &&
    organization &&
    "fee_balance_cents" in organization &&
    organization.fee_balance_cents > 0
  ) {
    return [
      {
        amount_cents: -organization.fee_balance_cents,
        code: TransactionType.BankFee,
        date: "",
        pending: true,
        memo: "FISCAL SPONSORSHIP",
        has_custom_memo: false,
        declined: false,
        missing_receipt: false,
      },
      ...transactions,
    ];
  } else {
    return transactions;
  }
}

export default function TransactionsTab({
  orgId,
  organization: _organization,
}: TransactionsTabProps) {
  const navigation = useNavigation();
  
  const {
    data: organization,
    error: organizationError,
    isLoading: organizationLoading,
  } = useSWR<Organization | OrganizationExpanded>(`organizations/${orgId}`, {
    fallbackData: _organization,
  });

  const { data: user, isLoading: userLoading } = useSWR("user");
  const [showMockData, setShowMockData] = useState(false);
  const [showTapToPayBanner, setShowTapToPayBanner] = useState(false);
  const terminal = useStripeTerminal();

  const [terminalInitialized, setTerminalInitialized] = useState(false);

  const {
    transactions: _transactions,
    isLoadingMore,
    loadMore,
    isLoading,
  } = useTransactions(orgId);
  const [refreshing] = useState(false);
  const { isOnline } = useOffline();

  useEffect(() => {
    const checkTapToPayBanner = async () => {
      try {
        const hasSeenBanner = await AsyncStorage.getItem(
          "hasSeenTapToPayBanner",
        );
        if (!hasSeenBanner && Platform.OS === "ios") {
          const [major, minor] = (Device.osVersion ?? "0.0")
            .split(".")
            .map(Number);
          // iOS 16.4 and later
          if (major > 16 || (major === 16 && minor >= 4)) {
            setShowTapToPayBanner(true);
          }
        }
      } catch (error) {
        logError("Error checking tap to pay banner status", error, {
          context: { action: "check_ttp_banner" },
        });
      }
    };
    checkTapToPayBanner();
  }, []);

  useEffect(() => {
    // Reset initialization when organization changes
    setTerminalInitialized(false);
  }, [organization]);

  useEffect(() => {
    (async () => {
      if (
        organization &&
        !organization.playground_mode &&
        !terminalInitialized
      ) {
        try {
          await terminal.initialize();
          setTerminalInitialized(true);
          // Only call supportsReadersOfType if initialize did not throw
          await terminal.supportsReadersOfType({
            deviceType: "tapToPay",
            discoveryMethod: "tapToPay",
          });
        } catch (error) {
          logError("Stripe Terminal initialization error", error, {
            context: { organizationId: organization?.id },
          });
        }
      }
    })();
  }, [organization, terminal, terminalInitialized]);

  const handleDismissTapToPayBanner = async () => {
    try {
      await AsyncStorage.setItem("hasSeenTapToPayBanner", "true");
      setShowTapToPayBanner(false);
    } catch (error) {
      logError("Error saving tap to pay banner dismiss status", error, {
        context: { action: "dismiss_ttp_banner" },
      });
      // Still hide the banner even if saving fails
      setShowTapToPayBanner(false);
    }
  };

  const tabBarSize = useBottomTabBarHeight();
  const { colors: themeColors } = useTheme();

  const transactions = useMemo(
    () => addPendingFeeToTransactions(_transactions, organization),
    [_transactions, organization],
  );

  const sections: { title: string; data: TransactionWithoutId[] }[] = useMemo(
    () =>
      Object.entries(
        groupBy(transactions, (t) =>
          t?.pending ? "Pending" : renderDate(t?.date),
        ),
      ).map(([title, data]) => ({
        title,
        data,
      })),
    [transactions],
  );

  const mock = new MockTransactionEngine();
  const mockTransactions = mock.generateMockTransactionList();
  const mockSections: { title: string; data: MockTransactionType[] }[] =
    useMemo(() => {
      return Object.entries(groupBy(mockTransactions, (t) => t.date))
        .sort(([dateA], [dateB]) => dateB.localeCompare(dateA))
        .map(([title, data]) => ({
          title: renderDate(title),
          data,
        }));
    }, [mockTransactions]);

  const onRefresh = () => {
    mutate(`organizations/${orgId}`);
    mutate(`organizations/${orgId}/transactions`);
  };

  if (organizationLoading || userLoading) {
    return <LoadingSkeleton />;
  }

  if (organizationError || !organization) {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: themeColors.background,
          justifyContent: "center",
          alignItems: "center",
          padding: 24,
        }}
      >
        <View
          style={{
            backgroundColor: themeColors.card,
            borderRadius: 20,
            padding: 32,
            width: "100%",
            maxWidth: 400,
            alignItems: "center",
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 4,
            },
            shadowOpacity: 0.08,
            shadowRadius: 12,
            elevation: 8,
          }}
        >
          <View
            style={{
              width: 96,
              height: 96,
              borderRadius: 48,
              backgroundColor: `${palette.primary}15`,
              justifyContent: "center",
              alignItems: "center",
              marginBottom: 32,
            }}
          >
            <Ionicons name="lock-closed" size={48} color={palette.primary} />
          </View>
          <Text
            style={{
              color: themeColors.text,
              fontSize: 28,
              fontWeight: "700",
              marginBottom: 16,
              textAlign: "center",
              letterSpacing: -0.5,
            }}
          >
            Access Denied
          </Text>
          <Text
            style={{
              color: palette.muted,
              fontSize: 17,
              lineHeight: 24,
              textAlign: "center",
              marginBottom: 32,
              paddingHorizontal: 8,
            }}
          >
            You don't have permission to view this organization. Please contact
            the organization's manager for access.
          </Text>
        </View>
      </View>
    );
  }

  return (
    <View style={{ flex: 1, backgroundColor: themeColors.background }}>
      {organization !== undefined ? (
        <SectionList
          initialNumToRender={20}
          ListFooterComponent={() =>
            isLoadingMore && !isLoading && !organization.playground_mode ? (
              <View style={{ padding: 20, alignItems: "center" }}>
                <ActivityIndicator size="small" color={themeColors.primary} />
              </View>
            ) : null
          }
          onEndReachedThreshold={0.2}
          onEndReached={() => loadMore()}
          refreshing={refreshing}
          onRefresh={() => onRefresh()}
          ListHeaderComponent={() => (
            <View>
              {showTapToPayBanner && (
                <TapToPayBanner
                  onDismiss={handleDismissTapToPayBanner}
                  orgId={orgId as `org_${string}`}
                />
              )}
              {organization?.playground_mode && <PlaygroundBanner />}
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  flexWrap: "wrap",
                  marginBottom: 32,
                  gap: 10,
                }}
              >
                <View>
                  <Text
                    style={{
                      color: palette.muted,
                      fontSize: 12,
                      textTransform: "uppercase",
                    }}
                  >
                    Account Balance
                  </Text>
                  <Text style={{ color: themeColors.text, fontSize: 36 }}>
                    {"balance_cents" in organization &&
                      renderMoney(organization.balance_cents)}
                  </Text>
                </View>
                {organization?.playground_mode && (
                  <Button
                    style={{
                      backgroundColor: "#3F9CEE",
                      borderTopWidth: 0,
                    }}
                    color="#fff"
                    onPress={() => setShowMockData((prev) => !prev)}
                  >
                    {showMockData ? "Hide Mock Data" : "Show Mock Data"}
                  </Button>
                )}
              </View>

              {isLoading && <LoadingSkeleton />}
              {!isLoading && sections.length === 0 && !showMockData && (
                <EmptyState isOnline={isOnline} />
              )}
            </View>
          )}
          // @ts-expect-error workaround for mock data
          sections={
            organization?.playground_mode && showMockData
              ? (mockSections as unknown)
              : sections
          }
          // stickySectionHeadersEnabled={false}
          style={{ flexGrow: 1 }}
          contentContainerStyle={{
            padding: 20,
            paddingBottom: tabBarSize + 20,
          }}
          scrollIndicatorInsets={{ bottom: tabBarSize }}
          renderSectionHeader={({ section: { title } }) => (
            <Text
              style={{
                color: palette.muted,
                backgroundColor: themeColors.background,
                paddingTop: 10,
                paddingBottom: 5,
                paddingHorizontal: 10,
                fontSize: 10,
                textTransform: "uppercase",
              }}
            >
              {title}
            </Text>
          )}
          renderItem={({ item, index, section: { data } }) =>
            organization?.playground_mode ? (
              <MockTransaction
                transaction={item}
                top={index == 0}
                bottom={index == data.length - 1}
              />
            ) : (
              <TouchableHighlight
                onPress={
                  item.id &&
                  "users" in organization &&
                  organization.users.some((u) => u.id === user?.id)
                    ? () => {
                        if (
                          item.code === TransactionType.Disbursement &&
                          "transfer" in item &&
                          item.transfer?.card_grant_id
                        ) {
                          // @ts-expect-error - navigation types need updating for organization tabs
                          navigation.navigate("GrantCard", {
                            grantId: item.transfer.card_grant_id,
                          });
                        } else {
                          // @ts-expect-error - navigation types need updating for organization tabs
                          navigation.navigate("Transaction", {
                            transactionId: item.id!,
                            orgId,
                            transaction: item as ITransaction,
                          });
                        }
                      }
                    : undefined
                }
                underlayColor={themeColors.background}
                activeOpacity={0.7}
              >
                <Transaction
                  orgId={orgId}
                  transaction={item}
                  top={index == 0}
                  bottom={index == data.length - 1}
                />
              </TouchableHighlight>
            )
          }
        />
      ) : (
        <LoadingSkeleton />
      )}
    </View>
  );
}