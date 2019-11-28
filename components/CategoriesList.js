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
import { getCategoris as getCategorisAction } from "../store/actions/categorisActions";

const CategoriesList = ({ categoriesList, error, panding, getCategoris }) => {
  useEffect(() => {
    getCategoris();
  }, [getCategoris]);

  if (panding === false) {
    return (
      <>
        <Text style={styles.categoriesLabel}>Categories</Text>
        <SafeAreaView style={styles.categoryListWrapper}>
          <FlatList
            keyExtractor={item => `${item.id} + ${item.name}`}
            data={categoriesList}
            renderItem={({ item }) => (
              <View style={styles.categoryButton}>
                <Button title={item.name} color="#f4e02b" />
              </View>
            )}
          />
        </SafeAreaView>
      </>
    );
  } else {
    return (
      <View style={styles.louder}>
        <ActivityIndicator size="large" color="#f4e02b" />
      </View>
    );
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
  }
});

const mapStateToProps = state => ({
  categoriesList: state.categories.categoriesList,
  error: state.categories.error,
  panding: state.categories.panding
});

const mapDispatchToProps = dispatch => ({
  getCategoris: () => dispatch(getCategorisAction())
});

// prettier-ignore
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoriesList);
