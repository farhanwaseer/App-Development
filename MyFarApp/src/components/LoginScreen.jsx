import { useState } from "react";
import {
  View,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  KeyboardAvoidingView,
  Platform
} from "react-native";

export const LoginScreen = () => {
  const [email, onChangeEmail] = useState("");
  const [password, onChangePassword] = useState("");
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView keyboardDismissMode="on-drag">
        <Text style={styles.headerText}>Welcome to Little Lemon</Text>
        <Text style={styles.regularText}>Login to continue </Text>
        <TextInput
          style={styles.textInput}
          value={email}
          onChange={onChangeEmail}
          keyboardType="email-address"
          placeholder="Email "
          clearButtonMode="always"
        />
        <TextInput
          style={styles.textInput}
          value={password}
          onChange={onChangePassword}
          placeholder="Password "
          keyboardType="default"
          secureTextEntry={true}
        />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerText: {
    padding: 40,
    fontSize: 30,
    color: "#EDEFEE",
    textAlign: "center",
  },
  regularText: {
    fontSize: 24,
    padding: 20,
    marginVertical: 8,
    color: "#EDEFEE",
    textAlign: "center",
  },
  textInput: {
    height: 50,
    margin: 10,
    marginLeft: 20,
    marginRight: 20,
    padding: 12,
    fontSize: 18,
    borderRadius: 20,
    borderWidth: 1,
    fontWeight: "bold",
    borderColor: "EDEFEE",
    backgroundColor: "white",
  },
});
