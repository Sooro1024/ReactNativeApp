import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import CatLogo from "../assets/cat.png";

const WelcomeScreen = () => {
  return (
    <>
      <View style={styles.boxContainer}>
        <Image resizeMode="center" source={CatLogo} />
      </View>
      <View style={styles.boxContainer}>
        <Text style={styles.welcomeText}>
          {
            "Hello to Cats app!!!\nMake you feel better\nchoose a category and enjoy\nglorious cats photos"
          }
        </Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: "18%",
    paddingTop: "10%"
  },
  boxContainer: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    width: "60%",
    height: "50%",
    marginBottom: "5%"
  },
  welcomeText: {
    textAlign: "center",
    fontWeight: "bold",
    color: "#1ead16",
    fontSize: 18
  }
});

export default WelcomeScreen;
