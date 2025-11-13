import { View, Text, Button, StyleSheet } from "react-native";
/////
import LittleLemonHeader from "./src/components/Header";
import WelcomeScreen from "./src/components/WelcomeScreen";
import MenuItems from "./src/components/MenuItems";
import LittleLemonFooter from "./src/components/Footer";

export default function App() {
  return (
    <>
      <View
        style={styles.container}
      >
        <LittleLemonHeader />
        {/* <MenuItems /> */}
        <WelcomeScreen />
      </View>
      <View style={styles.footer}>
        <LittleLemonFooter />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#495E57",
  },
  footer: {
    backgroundColor: "#495E57",
  },
});
