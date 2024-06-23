import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import Signup from "./Signup";

const HomePage = () => {
  const [isSignup, setSignup] = useState(false);
  return (
    <View style={styles.container}>
      {isSignup ? (
        <Signup />
      ) : (
        <ImageBackground
          source={{
            uri: "https://wallpapers.com/images/featured/torii-background-mjb0js1eboy62721.jpg",
          }}
          style={styles.backgroundImage}
        >
          <Text style={styles.heading}>Welcome to the App</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => setSignup(true)}
          >
            <Text style={styles.buttonText}>Get Started</Text>
          </TouchableOpacity>
        </ImageBackground>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  heading: {
    marginTop: 50,
    fontSize: 24,
    fontWeight: "bold",
    color: "#ffffff",
    marginBottom: 20,
  },
  backgroundImage: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    marginTop: 30,
    backgroundColor: "purple",
    padding: 15,
    borderRadius: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});
export default HomePage;
