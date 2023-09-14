import { View, Image, Text } from "react-native";

import { StackParamList } from "../../lib/NavigatorParamList";
import { palette } from "../../theme";

export default function OrganizationTitle(props: StackParamList["Event"]) {
  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      {props.image && (
        <Image
          source={{ uri: props.image }}
          style={{ marginRight: 10, borderRadius: 4 }}
          width={25}
          height={25}
        />
      )}
      <Text
        style={{
          color: palette.smoke,
          fontWeight: "600",
          fontSize: 17,
        }}
      >
        {props.title}
      </Text>
    </View>
  );
}