import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const Home = ({ route, navigation }) => {
  const { name } = route.params || {};

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome, {name || "Guest"}!</Text>
      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate("Profile", { name })}
      />
      <Button title="Logout" onPress={() => navigation.navigate("Login")} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 24, marginBottom: 20 },
});

export default Home;
