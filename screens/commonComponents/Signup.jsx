import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import Login from "./Login";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setLogin] = useState(false);

  const handleSignup = () => {
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <>
      {isLogin ? (
        <Login />
      ) : (
        <ImageBackground
          source={{
            uri: "https://img.freepik.com/free-vector/japanese-temple-hill_23-2148660096.jpg",
          }}
          style={styles.background}
        >
          <View style={styles.container}>
            <Text style={styles.title}>Signup</Text>
            <TextInput
              style={styles.input}
              placeholder="Name"
              value={name}
              onChangeText={setName}
            />
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
            <TouchableOpacity style={styles.button} onPress={handleSignup}>
              <Text style={styles.buttonText}>Signup</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.loginText}>
            Already have an account?
            <TouchableOpacity
              onPress={() => {
                setLogin(true);
              }}
            >
              <Text style={styles.loginLink}> Login here</Text>
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

export default Signup;
