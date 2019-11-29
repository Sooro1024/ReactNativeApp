import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  getCategoris as getCategorisAction,
  sellectCategory as sellectCategoryAction
} from "../store/actions/categorisActions";
import CategoriesList from "./CategoriesList";
import NoConection from "./NoConection";
import Loader from "./Loader";

const CategoriesContainer = ({
  categories,
  error,
  panding,
  getCategoris,
  fetchCounter,
  sideDrawerTogle,
  chooseCategori
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
      <CategoriesList
        selectCategory={selectCategory}
        categoriesList={categories}
      />
    );
  } else {
    if (fetchCounter >= 2) {
      return <NoConection />;
    } else {
      return <Loader />;
    }
  }
};

const mapStateToProps = state => ({
  categories: state.categories.categoriesList,
  error: state.categories.error,
  panding: state.categories.panding,
  fetchCounter: state.categories.fetchCounter
});

const mapDispatchToProps = dispatch => ({
  getCategoris: () => dispatch(getCategorisAction()),
  chooseCategori: category => dispatch(sellectCategoryAction(category))
});

// prettier-ignore
export default connect(mapStateToProps, mapDispatchToProps)(CategoriesContainer);
