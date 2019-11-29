import React from "react";
import { Provider } from "react-redux";
import store from "./store/store";
import { View, Dimensions, StyleSheet } from "react-native";
import SideDrawer from "./components/SideDrawer";
import WelcomeScreen from "./components/WelcomeScreen";
import ContetntWraper from "./components/ContetntWraper";

const { width: nativeWith } = Dimensions.get("window");

export default function App() {
  return (
    <>
      <Provider store={store}>
        <View style={styles.main}>
          <ContetntWraper>
            <WelcomeScreen />
          </ContetntWraper>
          <SideDrawer nativeWith={nativeWith} />
        </View>
      </Provider>
    </>
  );
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: "#f5f5f6",
    width: "100%",
    height: "100%"
  }
});
