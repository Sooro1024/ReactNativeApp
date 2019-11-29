import React from "react";
import { View, Dimensions, StyleSheet } from "react-native";
import SideDrawer from "./SideDrawer";
import ContetntWraper from "./ContetntWraper";
import { connect } from "react-redux";

const { width: nativeWith } = Dimensions.get("window");

const MainComponent = ({ currentCategory }) => {
  return (
    <View style={styles.main}>
      <ContetntWraper
        nativeWith={nativeWith}
        currentCategoryID={currentCategory.id}
      />
      <SideDrawer
        nativeWith={nativeWith}
        currentCategoryName={currentCategory.name}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    backgroundColor: "#f5f5f6",
    width: "100%",
    height: "100%"
  }
});

const mapStateToProps = state => ({
  currentCategory: state.categories.currentCategory
});

export default connect(mapStateToProps)(MainComponent);
