import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

// Screens
import WelcomeScreen from "../components/WelcomeScreen";
import MenuItems3 from "../components/MenuItems3";
import FeedbackForm from "../components/FeedbackForm";
import ViewMenu from "../components/ViewMenu";



/////////

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <Tab.Navigator
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
    </Tab.Navigator>
  );
};

export default AppNavigator;
