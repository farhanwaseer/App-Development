import { View, Text, Button, StyleSheet, FlatList, Image } from "react-native";

/////
import LittleLemonHeader from "./src/components/Header";
import WelcomeScreen from "./src/components/WelcomeScreen";
import MenuItems from "./src/components/MenuItems";
import LittleLemonFooter from "./src/components/Footer";
import MenuItems2 from "./src/components/MenuItems2";
import MenuItems3 from "./src/components/MenuItems3";
import FeedbackForm from "./src/components/FeedbackForm";
import Login from "./src/screens/Login";
import { LoginScreen } from "./src/components/LoginScreen";
import ViewMenu from "./src/components/ViewMenu";

export default function App() {
  return (
    <>
      <View style={styles.container}>
        <LittleLemonHeader />
        {/* <WelcomeScreen /> */}
        {/* <MenuItems /> */}
        {/* <MenuItems2 /> */}
        {/* <MenuItems3 /> */}
        {/* <FeedbackForm /> */}
        <LoginScreen />
        {/* <ViewMenu /> */}
      </View>
      <View style={styles.footer}>
        <LittleLemonFooter />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  logo: {
    height: 100,
    width: 300,
    resizeMode: "contain",
  },
  container: {
    flex: 1,
    backgroundColor: "#333333",
  },
  footer: {
    backgroundColor: "#333333",
  },
});
