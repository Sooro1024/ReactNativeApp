import React from "react";
import { View, StyleSheet } from "react-native";
import WelcomeScreen from "./WelcomeScreen";
import PhotosScreen from "./PhotosScreen";

const ContetntWraper = ({ nativeWith, currentCategoryID }) => {
  if (currentCategoryID === null) {
    return (
      <View style={styles.container}>
        <WelcomeScreen />
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <PhotosScreen
          nativeWith={nativeWith}
          currentCategoryID={currentCategoryID}
        />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: "18%"
  }
});

export default ContetntWraper;
