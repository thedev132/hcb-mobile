import { PropsWithChildren } from "react";
import { Pressable, View, ViewStyle } from "react-native";
import useSWR from "swr";

import User from "../lib/types/User";
import { isAdmin } from "../lib/userUtils";

export const AdminToolsStyle: ViewStyle = {
  backgroundColor: "#ff8c3710",
  borderColor: "#ff8c37",
  borderStyle: "dashed",
  borderWidth: 1,
  borderRadius: 8,
  padding: 8,
};

export default function AdminTools(
  props: PropsWithChildren<{ style?: ViewStyle; onPress?: () => void }>,
) {
  const { data: user } = useSWR<User>("user");

  if (!isAdmin(user)) return null;

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
