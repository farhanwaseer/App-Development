import * as React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export default function LittleLemonHeader() {
  return (
    <View style={headerStyles.container}>
      <Text style={headerStyles.headerText}>
        <Image
          style={headerStyles.logo}
          source={{
            uri: "https://d3c33hcgiwev3.cloudfront.net/imageAssetProxy.v1/yh3S-4LcQXGO99idg4HpPg_92f701034da44942a42fee3e878fc1a1_LIttle-Lemon-Logo.png?expiry=1763779088047&hmac=ktOBJz4tpCkwek1MkpCTYPmPhKqOFnFKAcgpM5mZVJc",
          }}
          
        />
      </Text>
    </View>
  );
}

const headerStyles = StyleSheet.create({
  logo: {
    
    height: 80,
    width: 300,
    resizeMode: "contain",
  },
  container: {
    backgroundColor: "#EE9972",
  },
  headerText: {
    marginTop: 20,
    padding: 40,
    fontSize: 30,
    color: "black",
    textAlign: "center",
  },
  innerText: {
    fontWeight: "bold",
  },
});
