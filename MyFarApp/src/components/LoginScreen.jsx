import { useState } from "react";
import {
  View,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  Pressable
} from "react-native";

export const LoginScreen = () => {
  const [email, onChangeEmail] = useState("");
  const [password, onChangePassword] = useState("");
  const [login, setLogin] = useState(false);

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView keyboardDismissMode="on-drag">
        <Text style={styles.headerText}>Welcome to Little Lemon</Text>
        <Text style={styles.regularText}>{ login  ? "Login to continue" : "Hello"} </Text>
        {login && (<View>
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
        </View>) }
        <Pressable onPress={() => {setLogin(!login)}}>
          <Text style={styles.loginBtn}>
            {login ? 'Login' : 'LogOut'}
          </Text>
        </Pressable>
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
  loginBtn : {
     color: "#fad417ff",
    fontSize: 30,
    justifyContent: "center",
    textAlign: "center",
    padding: 10,
    margin: 10,
    marginLeft: 70,
    marginRight: 70,
    backgroundColor: "#85848262",
    borderRadius: 30,
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
