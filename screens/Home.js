import React from "react";
import { View, Text, Button, Dimensions } from "react-native";

import QRCode from "react-native-qrcode-svg";

function HomeScreen({ navigation }) {
  const width = Dimensions.get("window").width;
  const padding = 50;
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <View style={{ padding }}>
        <QRCode value="proof of concept" size={width - padding * 2} />
      </View>
      <Button
        title="Settings"
        onPress={() => navigation.navigate("Settings")}
      />
    </View>
  );
}

export default HomeScreen;
