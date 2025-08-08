import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "@react-navigation/native";
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
} from "react-native";
import useSWR from "swr";

import { LoadingSkeleton } from "../../../components/organizations/LoadingSkeleton";
import Organization, {
  OrganizationExpanded,
} from "../../../lib/types/Organization";
import { palette } from "../../../theme";

interface MoreTabProps {
  orgId: string;
  organization?: Organization | OrganizationExpanded;
}

export default function MoreTab({
  orgId,
  organization: _organization,
}: MoreTabProps) {
  const { colors: themeColors } = useTheme();
  
  const {
    data: organization,
    error: organizationError,
    isLoading: organizationLoading,
  } = useSWR<Organization | OrganizationExpanded>(`organizations/${orgId}`, {
    fallbackData: _organization,
  });

  if (organizationLoading) {
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
          More Features
        </Text>
        <Text style={[styles.subtitle, { color: palette.muted }]}>
          Additional tools and settings coming soon
        </Text>
      </View>

      <View style={[styles.placeholderContainer, { backgroundColor: themeColors.card }]}>
        <View style={[styles.placeholderIcon, { backgroundColor: `${palette.primary}15` }]}>
          <Ionicons name="construct" size={48} color={palette.primary} />
        </View>
        
        <Text style={[styles.placeholderTitle, { color: themeColors.text }]}>
          Under Construction
        </Text>
        
        <Text style={[styles.placeholderDescription, { color: palette.muted }]}>
          We're working on additional features for organization management. 
          Check back soon for new tools and capabilities!
        </Text>

        <View style={styles.featuresList}>
          <Text style={[styles.featuresTitle, { color: themeColors.text }]}>
            Coming Soon:
          </Text>
          
          {[
            "Advanced reporting and analytics",
            "Budget management tools",
            "Recurring payment setup",
            "Custom approval workflows",
            "Integration with accounting software",
            "Team collaboration features"
          ].map((feature, index) => (
            <View key={index} style={styles.featureItem}>
              <View style={[styles.featureDot, { backgroundColor: palette.muted }]} />
              <Text style={[styles.featureText, { color: palette.muted }]}>
                {feature}
              </Text>
            </View>
          ))}
        </View>
      </View>

      <View style={[styles.feedbackContainer, { backgroundColor: themeColors.card }]}>
        <Ionicons name="bulb" size={24} color={palette.primary} />
        <View style={styles.feedbackContent}>
          <Text style={[styles.feedbackTitle, { color: themeColors.text }]}>
            Have Ideas?
          </Text>
          <Text style={[styles.feedbackText, { color: palette.muted }]}>
            We'd love to hear your suggestions for new features. 
            Contact us through the Settings tab to share your feedback.
          </Text>
        </View>
      </View>
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
  placeholderContainer: {
    padding: 32,
    borderRadius: 16,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 3,
  },
  placeholderIcon: {
    width: 96,
    height: 96,
    borderRadius: 48,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 24,
  },
  placeholderTitle: {
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 12,
    textAlign: "center",
  },
  placeholderDescription: {
    fontSize: 16,
    lineHeight: 24,
    textAlign: "center",
    marginBottom: 32,
  },
  featuresList: {
    width: "100%",
    alignItems: "flex-start",
  },
  featuresTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 16,
  },
  featureItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
    width: "100%",
  },
  featureDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    marginRight: 12,
  },
  featureText: {
    fontSize: 14,
    lineHeight: 20,
    flex: 1,
  },
  feedbackContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
    borderRadius: 12,
    marginTop: 24,
    gap: 16,
  },
  feedbackContent: {
    flex: 1,
  },
  feedbackTitle: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 4,
  },
  feedbackText: {
    fontSize: 14,
    lineHeight: 20,
  },
});