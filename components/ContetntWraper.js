import React from "react";
import { View, StyleSheet } from "react-native";

const ContetntWraper = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
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
  }
});

export default ContetntWraper;
