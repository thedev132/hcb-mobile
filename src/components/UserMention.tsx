import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "@react-navigation/native";
import { Text, View } from "react-native";

import User from "../lib/types/User";
import { isAdmin, isAuditor } from "../lib/userUtils";

import UserAvatar from "./UserAvatar";

export default function UserMention({ user }: { user: User }) {
  const { colors: themeColors } = useTheme();
  const showRoleIcon = isAdmin(user) || isAuditor(user);

  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        gap: showRoleIcon ? 5 : 10,
      }}
    >
      <UserAvatar user={user} />
      {isAdmin(user) && <Ionicons name="flash" color="#f1c40f" size={15} />}
      {isAuditor(user) && <Ionicons name="eye" color="#5bc0de" size={15} />}
      <Text style={{ color: themeColors.text }}>{user.name}</Text>
    </View>
  );
}
