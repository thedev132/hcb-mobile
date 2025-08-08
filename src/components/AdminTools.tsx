import { PropsWithChildren } from "react";
import { Pressable, View, ViewStyle } from "react-native";
import useSWR from "swr";

import User from "../lib/types/User";

export const AdminToolsStyle: ViewStyle = {
  backgroundColor: "#ff8c3710",
  borderColor: "#ff8c37",
  borderStyle: "dashed",
  borderWidth: 1,
  borderRadius: 8,
  padding: 8,
};

// Helper function to check if user has admin-like read access
export function hasAdminReadAccess(user?: User): boolean {
  return user?.admin === true || user?.auditor === true;
}

export default function AdminTools(
  props: PropsWithChildren<{ style?: ViewStyle; onPress?: () => void }>,
) {
  const { data: user } = useSWR<User>("user");

  if (!hasAdminReadAccess(user)) return null;

  return (
    <Pressable onPress={props.onPress}>
      <View
        style={{
          ...AdminToolsStyle,
          ...props.style,
        }}
      >
        {props.children}
      </View>
    </Pressable>
  );
}
