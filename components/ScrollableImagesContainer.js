import React from "react";
import {
  View,
  Button,
  StyleSheet,
  ActivityIndicator,
  FlatList,
  Image,
  SafeAreaView
} from "react-native";

const ScrollableImagesContainer = ({
  nativeWith,
  catPhotos,
  panding,
  getMorePhotos
}) => {
  const imageSize = (nativeWith / 200) * 90;
  const imagePading = (nativeWith / 200) * 5;

  return (
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
                onPress={getMorePhotos.bind(this, true)}
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
  );
};

const styles = StyleSheet.create({
  scrolContainer: { flex: 2, width: "100%" },
  loadMoreButtom: {
    width: "100%",
    marginBottom: "10%",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center"
  }
});
export default ScrollableImagesContainer;
