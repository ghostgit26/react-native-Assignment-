import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import Signup from "./Signup";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignup, setIsSignup] = useState(false);

  const handleLogin = () => {
    console.log("Email:", email);
    console.log("Password:", password);
  };

  const image = {
    uri: "https://img.freepik.com/free-vector/japanese-temple-hill_23-2148660096.jpg",
  };

  return (
    <>
      {isSignup ? (
        <Signup />
      ) : (
        <ImageBackground source={image} style={styles.background}>
          <View style={styles.container}>
            <Text style={styles.title}>Login</Text>
            <TextInput
              style={styles.input}
              placeholder="Email"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
            />
            <TextInput
              style={styles.input}
              placeholder="Password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.loginText}>
            Don't have an account?
            <TouchableOpacity
              onPress={() => {
                setIsSignup(true);
              }}
            >
              <Text style={styles.loginLink}> Register here</Text>
            </TouchableOpacity>
          </Text>
        </ImageBackground>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  container: {
    backgroundColor: "rgba(255, 255, 255, 0.95)",
    padding: 20,
    width: "70%",
    aspectRatio: 1,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "purple",
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  button: {
    backgroundColor: "purple",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    width: "80%",
    marginBottom: 10,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
  loginText: {
    marginTop: 10,
    textAlign: "center",
    fontSize: 14,
    color: "white",
  },
  loginLink: {
    color: "white",
    textDecorationLine: "underline",
  },
});

export default Login;
