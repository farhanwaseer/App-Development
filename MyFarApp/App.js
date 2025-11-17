import { View, Text, Button, StyleSheet, FlatList } from "react-native";

/////
import LittleLemonHeader from "./src/components/Header";
import WelcomeScreen from "./src/components/WelcomeScreen";
import MenuItems from "./src/components/MenuItems";
import LittleLemonFooter from "./src/components/Footer";
import MenuItems2 from "./src/components/MenuItems2";



export default function App() {


  return (
    <>
      <View
        style={styles.container}
      >
        <LittleLemonHeader />
        {/* <MenuItems /> */}
        {/* <WelcomeScreen /> */}
        <MenuItems2 />
       
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
     backgroundColor: '#333333',
  },
  footer: {
     backgroundColor: '#333333',
  },
});
