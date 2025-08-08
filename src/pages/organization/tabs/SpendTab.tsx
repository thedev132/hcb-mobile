import { Ionicons } from "@expo/vector-icons";
import { useTheme, useNavigation } from "@react-navigation/native";
import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from "react-native";
import useSWR from "swr";

import { LoadingSkeleton } from "../../../components/organizations/LoadingSkeleton";
import Card from "../../../lib/types/Card";
import Organization, {
  OrganizationExpanded,
} from "../../../lib/types/Organization";
import { palette } from "../../../theme";

interface SpendTabProps {
  orgId: string;
  organization?: Organization | OrganizationExpanded;
}

export default function SpendTab({
  orgId,
  organization: _organization,
}: SpendTabProps) {
  const navigation = useNavigation();
  const { colors: themeColors } = useTheme();
  
  const {
    data: organization,
    error: organizationError,
    isLoading: organizationLoading,
  } = useSWR<Organization | OrganizationExpanded>(`organizations/${orgId}`, {
    fallbackData: _organization,
  });

  const { data: user, isLoading: userLoading } = useSWR("user");

  // Get organization cards
  const { data: cards, isLoading: cardsLoading } = useSWR<Card[]>(
    organization ? `organizations/${orgId}/cards` : null
  );

  if (organizationLoading || userLoading || cardsLoading) {
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
        <Text
          style={{
            color: themeColors.text,
            fontSize: 18,
            textAlign: "center",
          }}
        >
          Unable to load organization data
        </Text>
      </View>
    );
  }

  const isUserMember =
    "users" in organization &&
    organization.users.some((u) => u.id === user?.id);

  const isManager =
    "users" in organization &&
    organization.users.some(
      (u) => u.id === user?.id && u.role === "manager",
    );

  const handleCardsPress = () => {
    // @ts-expect-error - navigation types need updating for organization tabs
    navigation.navigate("Cards");
  };

  const handleTransfersPress = () => {
    // @ts-expect-error - navigation types need updating for organization tabs
    navigation.navigate("Transfer", {
      organization: organization,
    });
  };

  const organizationCards = cards?.filter(card => 
    card.organization.id === organization.id
  ) || [];

  return (
    <ScrollView 
      style={styles.container}
      contentContainerStyle={[
        styles.contentContainer,
        { backgroundColor: themeColors.background }
      ]}
    >
      <View style={styles.header}>
        <Text style={[styles.title, { color: themeColors.text }]}>
          Spend Money
        </Text>
        <Text style={[styles.subtitle, { color: palette.muted }]}>
          Manage cards and transfers for your organization
        </Text>
      </View>

      <View style={styles.optionsContainer}>
        {/* Cards Section */}
        <TouchableOpacity
          style={[styles.option, { backgroundColor: themeColors.card }]}
          onPress={handleCardsPress}
          disabled={!isUserMember}
        >
          <View style={styles.optionIconContainer}>
            <View style={[styles.optionIcon, { backgroundColor: "#6366F115" }]}>
              <Ionicons name="card" size={24} color="#6366F1" />
            </View>
          </View>
          <View style={styles.optionContent}>
            <View style={styles.optionHeader}>
              <Text style={[styles.optionTitle, { color: themeColors.text }]}>
                Cards
              </Text>
              {organizationCards.length > 0 && (
                <View style={[styles.badge, { backgroundColor: palette.primary }]}>
                  <Text style={styles.badgeText}>{organizationCards.length}</Text>
                </View>
              )}
            </View>
            <Text style={[styles.optionDescription, { color: palette.muted }]}>
              {isUserMember
                ? organizationCards.length > 0
                  ? `Manage ${organizationCards.length} organization card${organizationCards.length === 1 ? '' : 's'}`
                  : "View and manage organization cards"
                : "Access restricted to organization members"}
            </Text>
          </View>
          <View style={styles.optionArrow}>
            <Ionicons 
              name="chevron-forward" 
              size={20} 
              color={!isUserMember ? palette.muted : palette.primary} 
            />
          </View>
        </TouchableOpacity>

        {/* Transfers Section */}
        <TouchableOpacity
          style={[styles.option, { backgroundColor: themeColors.card }]}
          onPress={handleTransfersPress}
          disabled={!isManager || organization.playground_mode}
        >
          <View style={styles.optionIconContainer}>
            <View style={[styles.optionIcon, { backgroundColor: "#10B98115" }]}>
              <Ionicons name="swap-horizontal" size={24} color="#10B981" />
            </View>
          </View>
          <View style={styles.optionContent}>
            <Text style={[styles.optionTitle, { color: themeColors.text }]}>
              Transfers
            </Text>
            <Text style={[styles.optionDescription, { color: palette.muted }]}>
              {organization.playground_mode
                ? "Transfers not available in playground mode"
                : isManager
                  ? "Send money to other organizations or bank accounts"
                  : "Manager access required"}
            </Text>
          </View>
          <View style={styles.optionArrow}>
            <Ionicons 
              name="chevron-forward" 
              size={20} 
              color={
                !isManager || organization.playground_mode 
                  ? palette.muted 
                  : palette.primary
              } 
            />
          </View>
        </TouchableOpacity>

        {/* Grant Cards Section (Future) */}
        <TouchableOpacity
          style={[
            styles.option, 
            { backgroundColor: themeColors.card },
            styles.disabledOption
          ]}
          disabled={true}
        >
          <View style={styles.optionIconContainer}>
            <View style={[styles.optionIcon, { backgroundColor: "#F59E0B15" }]}>
              <Ionicons name="gift" size={24} color="#F59E0B" />
            </View>
          </View>
          <View style={styles.optionContent}>
            <Text style={[styles.optionTitle, { color: palette.muted }]}>
              Grant Cards
            </Text>
            <Text style={[styles.optionDescription, { color: palette.muted }]}>
              Issue cards for specific purposes (Coming soon)
            </Text>
          </View>
          <View style={styles.optionArrow}>
            <Ionicons name="chevron-forward" size={20} color={palette.muted} />
          </View>
        </TouchableOpacity>
      </View>

      {!isUserMember && (
        <View style={[styles.accessNote, { backgroundColor: themeColors.card }]}>
          <Ionicons name="information-circle" size={20} color={palette.muted} />
          <Text style={[styles.accessNoteText, { color: palette.muted }]}>
            You need to be a member of this organization to access spending features.
          </Text>
        </View>
      )}

      {isUserMember && !isManager && (
        <View style={[styles.accessNote, { backgroundColor: themeColors.card }]}>
          <Ionicons name="information-circle" size={20} color={palette.muted} />
          <Text style={[styles.accessNoteText, { color: palette.muted }]}>
            Manager permissions required for transfers and advanced features.
          </Text>
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    padding: 20,
  },
  header: {
    marginBottom: 30,
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    lineHeight: 22,
  },
  optionsContainer: {
    gap: 16,
  },
  option: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
    borderRadius: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 3,
  },
  disabledOption: {
    opacity: 0.6,
  },
  optionIconContainer: {
    marginRight: 16,
  },
  optionIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  optionContent: {
    flex: 1,
  },
  optionHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 4,
  },
  optionTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginRight: 8,
  },
  badge: {
    minWidth: 20,
    height: 20,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 6,
  },
  badgeText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "600",
  },
  optionDescription: {
    fontSize: 14,
    lineHeight: 20,
  },
  optionArrow: {
    marginLeft: 12,
  },
  accessNote: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    borderRadius: 12,
    marginTop: 24,
    gap: 12,
  },
  accessNoteText: {
    flex: 1,
    fontSize: 14,
    lineHeight: 20,
  },
});