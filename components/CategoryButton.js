import React from "react";
import { View, Button, StyleSheet } from "react-native";

const CategoryButton = ({ item, selectCategory }) => {
  return (
    <View style={styles.categoryButton}>
      <Button
        title={item.name}
        color="#1ead16"
        onPress={selectCategory.bind(this, item)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  categoryButton: {
    width: "100%",
    padding: "10%",
    paddingBottom: "0%"
  }
});

export default CategoryButton;
