import React, { useEffect } from "react";
import {
  View,
  FlatList,
  Text,
  ActivityIndicator,
  Button,
  SafeAreaView,
  StyleSheet
} from "react-native";
import { connect } from "react-redux";
import {
  getCategoris as getCategorisAction,
  sellectCategory as sellectCategoryAction
} from "../store/actions/categorisActions";

const CategoriesList = ({
  categoriesList,
  error,
  panding,
  getCategoris,
  fetchCounter,
  sideDrawerTogle,
  chooseCategori,
  currentCategory
}) => {
  useEffect(() => {
    getCategoris();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (fetchCounter < 2 && error !== null) {
      getCategoris();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error]);

  const selectCategory = id => {
    chooseCategori(id);
    sideDrawerTogle(false);
  };

  if (panding === false && error === null) {
    return (
      <>
        <Text style={styles.categoriesLabel}>Categories</Text>
        <SafeAreaView style={styles.categoryListWrapper}>
          <FlatList
            keyExtractor={item => `${item.id} + ${item.name}`}
            data={categoriesList}
            renderItem={({ item }) => (
              <View style={styles.categoryButton}>
                <Button
                  title={item.name}
                  color={currentCategory === item.id ? "#1ead16" : "#f4e02b"}
                  onPress={selectCategory.bind(this, item.id)}
                />
              </View>
            )}
          />
        </SafeAreaView>
      </>
    );
  } else {
    if (fetchCounter >= 2) {
      return (
        <View style={styles.louder}>
          <Text style={styles.errorText}>Pleas check your</Text>
          <Text style={styles.errorText}>internet connection</Text>
        </View>
      );
    } else {
      return (
        <View style={styles.louder}>
          <ActivityIndicator size="large" color="#f4e02b" />
        </View>
      );
    }
  }
};

const styles = StyleSheet.create({
  louder: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%"
  },
  categoryButton: {
    width: "100%",
    padding: "10%",
    paddingBottom: "0%"
  },
  categoryListWrapper: {
    flex: 1
  },
  categoriesLabel: {
    color: "white",
    textDecorationStyle: "solid",
    fontSize: 20,
    textAlign: "center",
    paddingTop: "2%"
  },
  errorText: {
    color: "#FFFFFF",
    fontWeight: "bold"
  }
});

const mapStateToProps = state => ({
  categoriesList: state.categories.categoriesList,
  error: state.categories.error,
  panding: state.categories.panding,
  fetchCounter: state.categories.fetchCounter,
  currentCategory: state.categories.currentCategory
});

const mapDispatchToProps = dispatch => ({
  getCategoris: () => dispatch(getCategorisAction()),
  chooseCategori: id => dispatch(sellectCategoryAction(id))
});

// prettier-ignore
export default connect(mapStateToProps, mapDispatchToProps)(CategoriesList);
