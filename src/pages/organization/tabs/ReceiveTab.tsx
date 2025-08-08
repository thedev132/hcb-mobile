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
import Organization, {
  OrganizationExpanded,
} from "../../../lib/types/Organization";
import { palette } from "../../../theme";

interface ReceiveTabProps {
  orgId: string;
  organization?: Organization | OrganizationExpanded;
}

export default function ReceiveTab({
  orgId,
  organization: _organization,
}: ReceiveTabProps) {
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

  const handleDonationsPress = () => {
    // @ts-expect-error - navigation types need updating for organization tabs
    navigation.navigate("OrganizationDonation", {
      orgId: organization.id,
    });
  };

  const handleInvoicesPress = () => {
    // Placeholder for future invoices functionality
    console.log("Invoices pressed - not yet implemented");
  };

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
          Receive Money
        </Text>
        <Text style={[styles.subtitle, { color: palette.muted }]}>
          Set up ways for your organization to receive funds
        </Text>
      </View>

      <View style={styles.optionsContainer}>
        {/* Donations Section */}
        <TouchableOpacity
          style={[styles.option, { backgroundColor: themeColors.card }]}
          onPress={handleDonationsPress}
          disabled={!isUserMember || organization.playground_mode}
        >
          <View style={styles.optionIconContainer}>
            <View style={[styles.optionIcon, { backgroundColor: "#4CAF5015" }]}>
              <Ionicons name="heart" size={24} color="#4CAF50" />
            </View>
          </View>
          <View style={styles.optionContent}>
            <Text style={[styles.optionTitle, { color: themeColors.text }]}>
              Donations
            </Text>
            <Text style={[styles.optionDescription, { color: palette.muted }]}>
              {organization.playground_mode
                ? "Collect donations with Tap to Pay (iOS 16.4+)"
                : isUserMember
                  ? "Set up donation collection for your organization"
                  : "Access restricted to organization members"}
            </Text>
          </View>
          <View style={styles.optionArrow}>
            <Ionicons 
              name="chevron-forward" 
              size={20} 
              color={
                !isUserMember || organization.playground_mode 
                  ? palette.muted 
                  : palette.primary
              } 
            />
          </View>
        </TouchableOpacity>

        {/* Invoices Section */}
        <TouchableOpacity
          style={[
            styles.option, 
            { backgroundColor: themeColors.card },
            styles.disabledOption
          ]}
          onPress={handleInvoicesPress}
          disabled={true}
        >
          <View style={styles.optionIconContainer}>
            <View style={[styles.optionIcon, { backgroundColor: "#2196F315" }]}>
              <Ionicons name="document-text" size={24} color="#2196F3" />
            </View>
          </View>
          <View style={styles.optionContent}>
            <Text style={[styles.optionTitle, { color: palette.muted }]}>
              Invoices
            </Text>
            <Text style={[styles.optionDescription, { color: palette.muted }]}>
              Send professional invoices (Coming soon)
            </Text>
          </View>
          <View style={styles.optionArrow}>
            <Ionicons name="chevron-forward" size={20} color={palette.muted} />
          </View>
        </TouchableOpacity>

        {/* Check Deposits Section */}
        <TouchableOpacity
          style={[
            styles.option, 
            { backgroundColor: themeColors.card },
            styles.disabledOption
          ]}
          disabled={true}
        >
          <View style={styles.optionIconContainer}>
            <View style={[styles.optionIcon, { backgroundColor: "#FF952315" }]}>
              <Ionicons name="card" size={24} color="#FF9523" />
            </View>
          </View>
          <View style={styles.optionContent}>
            <Text style={[styles.optionTitle, { color: palette.muted }]}>
              Check Deposits
            </Text>
            <Text style={[styles.optionDescription, { color: palette.muted }]}>
              Mobile check deposit (Coming soon)
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
            You need to be a member of this organization to access receive features.
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
  optionTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 4,
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