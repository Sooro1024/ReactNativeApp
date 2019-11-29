import React, { useState, useEffect } from "react";
import { View, Text, Animated, Button, Easing, StyleSheet } from "react-native";
import CategoriesList from "./CategoriesList";

export default function SideDrawer({ nativeWith }) {
  const [state] = useState(new Animated.Value(-nativeWith));

  const [open, setOpen] = useState(false);

  const handler = () => {
    setOpen(!open);
  };

  useEffect(() => {
    if (open) {
      Animated.timing(state, {
        toValue: 0,
        duration: 300,
        easing: Easing.ease
      }).start();
    } else {
      Animated.timing(state, {
        toValue: -nativeWith,
        duration: 300,
        easing: Easing.ease
      }).start();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);
  return (
    <>
      <View style={styles.header}>
        <View style={styles.headerText}>
          <View style={styles.headerButton}>
            <Button color="#f4e02b" title="Menu" onPress={handler} />
          </View>
          <Text style={styles.headerLabel}>Cats</Text>
        </View>
      </View>
      <Animated.View style={{ ...styles.sideBar, left: state }}>
        <CategoriesList />
      </Animated.View>
    </>
  );
}

const styles = StyleSheet.create({
  sideBar: {
    zIndex: 2,
    elevation: 1,
    position: "absolute",
    top: "12%",
    width: "50%",
    height: "88%",
    backgroundColor: "#5f5ec4"
  },
  header: {
    zIndex: 3,
    shadowColor: "#000000",
    elevation: 2,
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.8,
    shadowRadius: 12,
    padding: "4%",
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: "#283593",
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "12%"
  },
  headerButton: { position: "absolute", top: "25%", left: "1%" },
  headerText: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    position: "relative"
  },
  headerLabel: {
    color: "white",
    textDecorationStyle: "solid",
    fontSize: 20
  }
});
