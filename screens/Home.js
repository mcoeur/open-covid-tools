import React, { useState } from "react";
import { View, Text, Button, Dimensions, ScrollView } from "react-native";

import QRCode from "react-native-qrcode-svg";

function HomeScreen({ navigation }) {
  const width = Dimensions.get("window").width;
  const padding = 50;
  const codes = ["one", "two", "three"];
  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <ScrollView
        horizontal
        style={{ flexGrow: 0 }}
        decelerationRate="fast"
        pagingEnabled
        onScroll={({ nativeEvent }) =>
          setCurrentIndex(Math.round(nativeEvent.contentOffset.x / width))
        }
        showsHorizontalScrollIndicator={false}
      >
        {codes.map((code) => (
          <View style={{ padding, height: width, width }} key={code}>
            <QRCode value={code} size={width - padding * 2} />
          </View>
        ))}
      </ScrollView>
      <View style={{ flexDirection: "row", marginBottom: 20 }}>
        {codes.map((_, index) => (
          <View
            key={index}
            style={{
              width: 10,
              height: 10,
              borderRadius: 5,
              margin: 2,
              backgroundColor:
                index === currentIndex ? "rgba(0,0,0,.5)" : "rgba(0,0,0,.1)",
            }}
          ></View>
        ))}
      </View>
      <Button
        title="Settings"
        onPress={() => navigation.navigate("Settings")}
      />
    </View>
  );
}

export default HomeScreen;
