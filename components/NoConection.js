import React from "react";
import { View, Text, StyleSheet } from "react-native";

const NoConection = () => {
  return (
    <View style={styles.loader}>
      <Text style={styles.errorText}>Pleas check your</Text>
      <Text style={styles.errorText}>internet connection</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  loader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%"
  },
  errorText: {
    color: "#FFFFFF",
    fontWeight: "bold"
  }
});

export default NoConection;
