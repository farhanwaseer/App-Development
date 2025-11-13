import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const Profile = ({ route, navigation }) => {
  const { name } = route.params || {};

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile Screen</Text>
      <Text style={styles.text}>Name: {name || "Unknown"}</Text>
      <Button title="Back to Home" onPress={() => navigation.goBack()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 10 },
  text: { fontSize: 18, marginBottom: 20 },
});

export default Profile;
