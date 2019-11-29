import React from "react";
import { FlatList, Text, SafeAreaView, StyleSheet } from "react-native";
import CategoryButton from "./CategoryButton";

const CategoriesList = ({ categoriesList, selectCategory }) => {
  return (
    <>
      <Text style={styles.categoriesLabel}>Categories</Text>
      <SafeAreaView style={styles.categoryListWrapper}>
        <FlatList
          keyExtractor={item => `${item.id} + ${item.name}`}
          data={categoriesList}
          renderItem={({ item }) => (
            <CategoryButton item={item} selectCategory={selectCategory} />
          )}
        />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  categoryListWrapper: {
    flex: 1
  },
  categoriesLabel: {
    color: "white",
    textDecorationStyle: "solid",
    fontSize: 20,
    textAlign: "center",
    paddingTop: "2%"
  }
});

export default CategoriesList;
