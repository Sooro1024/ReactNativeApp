import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getPhotosByCategoryId } from "../store/actions/getPhotosAction";
import ScrollableImagesContainer from "./ScrollableImagesContainer";
import Loader from "./Loader";

const PhotosScreen = ({
  catPhotos,
  panding,
  getPhotos,
  currentCategoryID,
  nativeWith
}) => {
  useEffect(() => {
    getPhotos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentCategoryID]);

  if (catPhotos !== null) {
    return (
      <ScrollableImagesContainer
        catPhotos={catPhotos}
        nativeWith={nativeWith}
        getMorePhotos={getPhotos}
        panding={panding}
      />
    );
  } else {
    return <Loader />;
  }
};

const mapStateToProps = state => ({
  catPhotos: state.photosReducer.catPhotos,
  panding: state.photosReducer.panding
});

const mapDispatchToProps = dispatch => ({
  getPhotos: more => dispatch(getPhotosByCategoryId(more))
});

// prettier-ignore
export default connect(mapStateToProps, mapDispatchToProps)(PhotosScreen);
