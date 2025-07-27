import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import * as Haptics from "expo-haptics";
import { useState } from "react";
import {
  ActivityIndicator,
  Alert,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import useSWR from "swr";

import Button from "../../components/Button";
import { showAlert } from "../../lib/alertUtils";
import useClient from "../../lib/client";
import { logError } from "../../lib/errorUtils";
import { CardsStackParamList } from "../../lib/NavigatorParamList";
import Card from "../../lib/types/Card";
import Organization from "../../lib/types/Organization";
import { palette } from "../../utils/theme";

type Props = NativeStackScreenProps<CardsStackParamList, "OrderCard">;

export default function OrderCard({ navigation }: Props) {
  const { colors: themeColors } = useTheme();
  const insets = useSafeAreaInsets();
  const hcb = useClient();

  // Fetch user organizations
  const { data: organizations, isLoading: organizationsLoading } = useSWR<
    Organization[]
  >("user/organizations");

  // Form state
  const [selectedOrgId, setSelectedOrgId] = useState<string>("");
  const [cardType, setCardType] = useState<"virtual" | "physical">("virtual");
  const [cardName, setCardName] = useState<string>("");
  const [isCreating, setIsCreating] = useState(false);

  // Validation
  const isFormValid = selectedOrgId && cardName.trim().length > 0;

  const handleCreateCard = async () => {
    if (!isFormValid) {
      showAlert("Validation Error", "Please fill in all required fields.");
      return;
    }

    setIsCreating(true);
    try {
      const response = await hcb
        .post(`organizations/${selectedOrgId}/cards`, {
          json: {
            type: cardType,
            name: cardName.trim(),
          },
        })
        .json<Card>();

      // Success feedback
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);

      // Navigate to the created card
      navigation.replace("Card", { card: response });
    } catch (error) {
      logError("Error creating card", error, {
        context: { orgId: selectedOrgId, cardType, cardName },
      });
      
      Alert.alert(
        "Error",
        "Failed to create card. Please try again.",
        [{ text: "OK" }]
      );
    } finally {
      setIsCreating(false);
    }
  };

  if (organizationsLoading) {
    return (
      <View style={{ 
        flex: 1, 
        justifyContent: "center", 
        alignItems: "center",
        backgroundColor: themeColors.background 
      }}>
        <ActivityIndicator size="large" color={palette.primary} />
        <Text style={{ 
          color: themeColors.text, 
          marginTop: 16,
          fontSize: 16 
        }}>
          Loading organizations...
        </Text>
      </View>
    );
  }

  if (!organizations || organizations.length === 0) {
    return (
      <View style={{ 
        flex: 1, 
        justifyContent: "center", 
        alignItems: "center",
        backgroundColor: themeColors.background,
        paddingHorizontal: 20
      }}>
        <Ionicons name="business-outline" size={64} color={themeColors.text} />
        <Text style={{ 
          color: themeColors.text, 
          fontSize: 18,
          fontWeight: "600",
          marginTop: 16,
          textAlign: "center"
        }}>
          No Organizations Available
        </Text>
        <Text style={{ 
          color: themeColors.text, 
          fontSize: 16,
          opacity: 0.7,
          marginTop: 8,
          textAlign: "center"
        }}>
          You need to be a member of an organization to create cards.
        </Text>
      </View>
    );
  }

  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: themeColors.background,
      }}
      contentContainerStyle={{
        padding: 20,
        paddingBottom: insets.bottom + 20,
      }}
    >
      {/* Organization Selection */}
      <View style={{ marginBottom: 24 }}>
        <Text
          style={{
            color: themeColors.text,
            fontSize: 18,
            fontWeight: "600",
            marginBottom: 12,
          }}
        >
          Organization *
        </Text>
        <View
          style={{
            backgroundColor: themeColors.card,
            borderRadius: 12,
            borderWidth: 1,
            borderColor: selectedOrgId ? palette.primary : themeColors.border,
          }}
        >
          {organizations.map((org, index) => (
            <Pressable
              key={org.id}
              onPress={() => {
                Haptics.selectionAsync();
                setSelectedOrgId(org.id);
              }}
              style={{
                padding: 16,
                flexDirection: "row",
                alignItems: "center",
                borderBottomWidth: index < organizations.length - 1 ? 1 : 0,
                borderBottomColor: themeColors.border,
              }}
            >
              <View style={{ flex: 1 }}>
                <Text
                  style={{
                    color: themeColors.text,
                    fontSize: 16,
                    fontWeight: "500",
                  }}
                >
                  {org.name}
                </Text>
                {org.playground_mode && (
                  <Text
                    style={{
                      color: palette.orange,
                      fontSize: 12,
                      marginTop: 2,
                    }}
                  >
                    Playground Mode
                  </Text>
                )}
              </View>
              {selectedOrgId === org.id && (
                <Ionicons
                  name="checkmark-circle"
                  size={24}
                  color={palette.primary}
                />
              )}
            </Pressable>
          ))}
        </View>
      </View>

      {/* Card Type Selection */}
      <View style={{ marginBottom: 24 }}>
        <Text
          style={{
            color: themeColors.text,
            fontSize: 18,
            fontWeight: "600",
            marginBottom: 12,
          }}
        >
          Card Type *
        </Text>
        <View style={{ flexDirection: "row", gap: 12 }}>
          <Pressable
            onPress={() => {
              Haptics.selectionAsync();
              setCardType("virtual");
            }}
            style={{
              flex: 1,
              padding: 16,
              backgroundColor: themeColors.card,
              borderRadius: 12,
              borderWidth: 2,
              borderColor: cardType === "virtual" ? palette.primary : themeColors.border,
              alignItems: "center",
            }}
          >
            <Ionicons
              name="card-outline"
              size={32}
              color={cardType === "virtual" ? palette.primary : themeColors.text}
            />
            <Text
              style={{
                color: cardType === "virtual" ? palette.primary : themeColors.text,
                fontSize: 16,
                fontWeight: "600",
                marginTop: 8,
              }}
            >
              Virtual
            </Text>
            <Text
              style={{
                color: themeColors.text,
                fontSize: 12,
                opacity: 0.7,
                textAlign: "center",
                marginTop: 4,
              }}
            >
              Instant, for online use
            </Text>
          </Pressable>

          <Pressable
            onPress={() => {
              Haptics.selectionAsync();
              setCardType("physical");
            }}
            style={{
              flex: 1,
              padding: 16,
              backgroundColor: themeColors.card,
              borderRadius: 12,
              borderWidth: 2,
              borderColor: cardType === "physical" ? palette.primary : themeColors.border,
              alignItems: "center",
            }}
          >
            <Ionicons
              name="card"
              size={32}
              color={cardType === "physical" ? palette.primary : themeColors.text}
            />
            <Text
              style={{
                color: cardType === "physical" ? palette.primary : themeColors.text,
                fontSize: 16,
                fontWeight: "600",
                marginTop: 8,
              }}
            >
              Physical
            </Text>
            <Text
              style={{
                color: themeColors.text,
                fontSize: 12,
                opacity: 0.7,
                textAlign: "center",
                marginTop: 4,
              }}
            >
              Shipped to you
            </Text>
          </Pressable>
        </View>
      </View>

      {/* Card Name Input */}
      <View style={{ marginBottom: 32 }}>
        <Text
          style={{
            color: themeColors.text,
            fontSize: 18,
            fontWeight: "600",
            marginBottom: 12,
          }}
        >
          Card Name *
        </Text>
        <TextInput
          value={cardName}
          onChangeText={setCardName}
          placeholder="Enter a name for your card"
          placeholderTextColor={themeColors.text + "80"}
          style={{
            backgroundColor: themeColors.card,
            borderRadius: 12,
            borderWidth: 1,
            borderColor: cardName.trim() ? palette.primary : themeColors.border,
            padding: 16,
            fontSize: 16,
            color: themeColors.text,
          }}
          maxLength={50}
        />
        <Text
          style={{
            color: themeColors.text,
            fontSize: 12,
            opacity: 0.7,
            marginTop: 8,
          }}
        >
          {cardName.length}/50 characters
        </Text>
      </View>

      {/* Information Box */}
      <View
        style={{
          backgroundColor: palette.blue + "15",
          borderRadius: 12,
          padding: 16,
          marginBottom: 32,
          borderLeftWidth: 4,
          borderLeftColor: palette.blue,
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "flex-start" }}>
          <Ionicons name="information-circle" size={20} color={palette.blue} />
          <View style={{ flex: 1, marginLeft: 12 }}>
            <Text
              style={{
                color: themeColors.text,
                fontSize: 14,
                fontWeight: "500",
                marginBottom: 4,
              }}
            >
              Important Information
            </Text>
            <Text
              style={{
                color: themeColors.text,
                fontSize: 14,
                opacity: 0.8,
                lineHeight: 20,
              }}
            >
              {cardType === "virtual" 
                ? "Virtual cards are created instantly and can be used immediately for online purchases. You can view the card details after creation."
                : "Physical cards will be shipped to your address and may take 7-10 business days to arrive. The card will be inactive until you receive and activate it."
              }
            </Text>
          </View>
        </View>
      </View>

      {/* Create Card Button */}
      <Button
        onPress={handleCreateCard}
        disabled={!isFormValid || isCreating}
        style={{
          opacity: !isFormValid || isCreating ? 0.6 : 1,
        }}
      >
        {isCreating ? (
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <ActivityIndicator size="small" color="white" />
            <Text style={{ color: "white", fontSize: 16, fontWeight: "600", marginLeft: 8 }}>
              Creating Card...
            </Text>
          </View>
        ) : (
          <Text style={{ color: "white", fontSize: 16, fontWeight: "600" }}>
            Create {cardType === "virtual" ? "Virtual" : "Physical"} Card
          </Text>
        )}
      </Button>
    </ScrollView>
  );
}