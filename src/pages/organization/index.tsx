import { Ionicons } from "@expo/vector-icons";
import { MenuAction, MenuView } from "@react-native-menu/menu";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { BlurView } from "expo-blur";
import { useEffect } from "react";
import {
  Platform,
  StyleSheet,
  useColorScheme,
} from "react-native";
import useSWR from "swr";

import { LoadingSkeleton } from "../../components/organizations/LoadingSkeleton";
import { StackParamList, OrganizationTabParamList } from "../../lib/NavigatorParamList";
import Organization, {
  OrganizationExpanded,
} from "../../lib/types/Organization";
import { useIsDark } from "../../lib/useColorScheme";
import { palette } from "../../theme";

import MoreTab from "./tabs/MoreTab";
import ReceiveTab from "./tabs/ReceiveTab";
import SpendTab from "./tabs/SpendTab";
import TransactionsTab from "./tabs/TransactionsTab";

type Props = NativeStackScreenProps<StackParamList, "Event">;

const OrganizationTab = createBottomTabNavigator<OrganizationTabParamList>();

export default function OrganizationPage({
  route: {
    params: { orgId, organization: _organization },
  },
  navigation,
}: Props) {
  const scheme = useColorScheme();
  const {
    data: organization,
    error: organizationError,
    isLoading: organizationLoading,
  } = useSWR<Organization | OrganizationExpanded>(`organizations/${orgId}`, {
    fallbackData: _organization,
  });

  const { data: user, isLoading: userLoading } = useSWR("user");
  
  const isDark = useIsDark();

  useEffect(() => {
    if (organizationError || !organization) {
      navigation.setOptions({
        title: "Access Denied",
      });
    }
  }, [organizationError, organization, navigation]);

  useEffect(() => {
    if (organization && user) {
      const isManager =
        "users" in organization &&
        organization.users.some(
          (u) => u.id === user?.id && u.role === "manager",
        );

      navigation.setOptions({
        title: organization.name,
      });

      const menuActions: MenuAction[] = [];

      if (
        "users" in organization &&
        organization.users.some((u) => u.id === user?.id)
      ) {
        if (
          "account_number" in organization &&
          organization.account_number !== null
        ) {
          menuActions.push({
            id: "accountNumber",
            title: "View Account Details",
            image: "creditcard.and.123",
          });
        }

        if (isManager && !organization.playground_mode) {
          menuActions.push({
            id: "transfer",
            title: "Transfer Money",
            image: "dollarsign.circle",
          });
        }

        menuActions.push({
          id: "team",
          title: "Manage Team",
          image: "person.2.badge.gearshape",
        });

        if (!organization.playground_mode) {
          menuActions.push({
            id: "donation",
            title: "Collect Donations",
            image: "dollarsign.circle",
          });
        }

        navigation.setOptions({
          headerRight: () => (
            <MenuView
              actions={menuActions}
              themeVariant={scheme || undefined}
              onPressAction={({ nativeEvent: { event } }) => {
                if (event == "accountNumber") {
                  navigation.navigate("AccountNumber", {
                    orgId: organization.id,
                  });
                } else if (event == "team") {
                  navigation.navigate("OrganizationTeam", {
                    orgId: organization.id,
                  });
                } else if (event == "donation") {
                  navigation.navigate("OrganizationDonation", {
                    orgId: organization.id,
                  });
                } else if (event == "transfer") {
                  navigation.navigate("Transfer", {
                    organization: organization,
                  });
                }
              }}
            >
              <Ionicons.Button
                name="ellipsis-horizontal-circle"
                backgroundColor="transparent"
                size={24}
                color={palette.primary}
                iconStyle={{ marginRight: 0 }}
              />
            </MenuView>
          ),
        });
      }
    }
  }, [organization, scheme, navigation, user]);

  if (organizationLoading || userLoading) {
    return <LoadingSkeleton />;
  }

  if (organizationError || !organization) {
    return <LoadingSkeleton />;
  }

  return (
    <OrganizationTab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName: string;

          if (route.name === "Transactions") {
            iconName = "list";
          } else if (route.name === "Receive") {
            iconName = "arrow-down-circle";
          } else if (route.name === "Spend") {
            iconName = "arrow-up-circle";
          } else if (route.name === "More") {
            iconName = "ellipsis-horizontal";
          } else {
            iconName = "help-circle";
          }

          return <Ionicons name={iconName as keyof typeof Ionicons.glyphMap} size={size} color={color} />;
        },
        headerShown: false,
        ...(Platform.OS === "android"
          ? {
              tabBarStyle: {
                position: "absolute",
                paddingBottom: 5,
                height: 50,
              },
            }
          : {
              tabBarStyle: {
                position: "absolute",
              },
            }),
        tabBarHideOnKeyboard: true,
        tabBarBackground: () =>
          Platform.OS === "ios" ? (
            <BlurView
              tint={isDark ? "dark" : "light"}
              intensity={100}
              style={StyleSheet.absoluteFill}
              experimentalBlurMethod="dimezisBlurView"
            />
          ) : null,
      })}
    >
      <OrganizationTab.Screen
        name="Transactions"
        options={{ tabBarLabel: "Transactions" }}
        component={() => (
          <TransactionsTab orgId={orgId} organization={organization} />
        )}
      />
      <OrganizationTab.Screen
        name="Receive"
        options={{ tabBarLabel: "Receive" }}
        component={() => (
          <ReceiveTab orgId={orgId} organization={organization} />
        )}
      />
      <OrganizationTab.Screen
        name="Spend"
        options={{ tabBarLabel: "Spend" }}
        component={() => (
          <SpendTab orgId={orgId} organization={organization} />
        )}
      />
      <OrganizationTab.Screen
        name="More"
        options={{ tabBarLabel: "More" }}
        component={() => (
          <MoreTab orgId={orgId} organization={organization} />
        )}
      />
    </OrganizationTab.Navigator>
  );
}
