import { View, Text, Button, StyleSheet, FlatList } from "react-native";

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
        {/* <Login /> */}
        <LoginScreen />
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
    backgroundColor: "#333333",
  },
  footer: {
    backgroundColor: "#333333",
  },
});
