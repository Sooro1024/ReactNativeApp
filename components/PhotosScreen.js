import React, { useEffect } from "react";
import {
  View,
  Button,
  StyleSheet,
  ActivityIndicator,
  FlatList,
  Image,
  SafeAreaView
} from "react-native";
import { connect } from "react-redux";
import {
  getPhotosByCategoryId,
  getMorePhotosByCategoryId
} from "../store/actions/getPhotosAction";

const PhotosScreen = ({
  catPhotos,
  panding,
  getMorePhotos,
  getPhotos,
  currentCategory,
  nativeWith
}) => {
  useEffect(() => {
    getPhotos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentCategory]);

  const imageSize = (nativeWith / 200) * 90;
  const imagePading = (nativeWith / 200) * 5;

  if (catPhotos !== null) {
    return (
      <>
        <SafeAreaView style={styles.scrolContainer}>
          <FlatList
            numColumns={2}
            keyExtractor={item => item.id}
            data={catPhotos}
            ListFooterComponent={
              <View style={styles.loadMoreButtom}>
                {!panding && (
                  <Button
                    title="Load More"
                    color="#f4e02b"
                    onPress={getMorePhotos}
                  />
                )}
                {panding && <ActivityIndicator size="large" color="#f4e02b" />}
              </View>
            }
            renderItem={({ item }) => (
              <Image
                resizeMode="contain"
                style={{
                  width: imageSize,
                  height: imageSize,
                  margin: imagePading
                }}
                source={{ uri: item.url }}
              />
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
  scrolContainer: { flex: 2, width: "100%" },
  loadMoreButtom: {
    width: "100%",
    marginBottom: "10%",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center"
  }
});

const mapStateToProps = state => ({
  catPhotos: state.photosReducer.catPhotos,
  panding: state.photosReducer.panding
});

const mapDispatchToProps = dispatch => ({
  getPhotos: () => dispatch(getPhotosByCategoryId()),
  getMorePhotos: () => dispatch(getMorePhotosByCategoryId())
});

// prettier-ignore
export default connect(mapStateToProps, mapDispatchToProps)(PhotosScreen);
