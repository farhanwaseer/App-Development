import { View, Text, Button, StyleSheet, FlatList, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

/////
import ViewMenu from "./src/components/ViewMenu";
import LittleLemonHeader from "./src/components/Header";
import MenuItems from "./src/components/MenuItems";
import LittleLemonFooter from "./src/components/Footer";
import MenuItems2 from "./src/components/MenuItems2";
import WelcomeScreen from "./src/components/WelcomeScreen";
import MenuItems3 from "./src/components/MenuItems3";
import FeedbackForm from "./src/components/FeedbackForm";
import Login from "./src/screens/Login";
import { LoginScreen } from "./src/components/LoginScreen";
import AppNavigator from "./src/navigation/AppNavigator";

export default function App() {
  // const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();
  return (
    <>
      <NavigationContainer>
        <View style={styles.container}>
          <LittleLemonHeader />
          {/* <WelcomeScreen /> */}
          {/* <MenuItems /> */}
          {/* <MenuItems2 /> */}
          {/* <MenuItems3 /> */}
          {/* <FeedbackForm /> */}
          {/* <LoginScreen /> */}
          {/* <ViewMenu /> */}

          
          {/* Stack Navigation */}

          {/* <Stack.Navigator>
            <Stack.Screen name="login" component={LoginScreen} />
            <Stack.Screen name="MenuItems3" component={MenuItems3} />
            <Stack.Screen name="ViewMenu" component={ViewMenu} />
            <Stack.Screen name="FeedbackForm" component={FeedbackForm} />
            </Stack.Navigator> */}

          {/* Tab Navigation */}

          {/* <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                if (route.name === "Welcome Screen") {
                  iconName = focused ? "home" : "home-outline";
                } else if (route.name === "MenuItems3") {
                  iconName = focused ? "restaurant" : "restaurant-outline";
                } else if (route.name === "ViewMenu") {
                  iconName = focused ? "list" : "list-outline";
                } else if (route.name === "FeedbackForm") {
                  iconName = focused ? "chatbubbles" : "chatbubbles-outline";
                }

                return <Ionicons name={iconName} size={size} color={color} />;
              },

              tabBarActiveTintColor: "tomato",
              tabBarInactiveTintColor: "gray",
              tabBarStyle: {
                backgroundColor: "#fff",
                paddingBottom: 5,
                height: 60,
                marginBottom: 50,
              },
            })}
          >
            <Tab.Screen
              name="Welcome Screen"
              component={WelcomeScreen}
              options={{ title: "Home" }}
            />

            <Tab.Screen
              name="MenuItems3"
              component={MenuItems3}
              options={{ title: "Menu" }}
            />

            <Tab.Screen
              name="ViewMenu"
              component={ViewMenu}
              options={{ title: "View" }}
            />

            <Tab.Screen
              name="FeedbackForm"
              component={FeedbackForm}
              options={{ title: "Feedback" }}
            />
          </Tab.Navigator> */}
        <AppNavigator />

        </View>
        {/* <View style={styles.footer}>
          <LittleLemonFooter />
          </View> */}
      </NavigationContainer>
    </>

    // <>
    // {/* <NavigationContainer>
    //   <AppNavigator />
    // </NavigationContainer> */}
    // </>
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
  ViewBtn: {
    flexDirection: "row",
    // justifyContent: "space-between",
    gap: 10, // optional (RN 0.71+)
    margin: 20,
  },
});
