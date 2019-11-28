import React, { useState, useEffect } from "react";
import { Provider } from "react-redux";
import store from "./store/store";
import {
  View,
  Text,
  Animated,
  Dimensions,
  StyleSheet,
  Button,
  Easing,
  ScrollView,
  compo
} from "react-native";
import SideDrawer from "./components/SideDrawer";

const { width: nativeWith } = Dimensions.get("window");

export default function App() {
  return (
    <>
      <Provider store={store}>
        <View style={styles.main}>
          {/* <AAA /> */}
          <SideDrawer nativeWith={nativeWith} />
        </View>
      </Provider>
    </>
  );
}

const styles = StyleSheet.create({
  main: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end",
    backgroundColor: "#f5f5f6",
    width: "100%",
    height: "100%"
  }
});

// const AAA = () => {
//   const [categoris, setCategoris] = useState([]);
//   useEffect(() => {
//     getCategories();
//   }, []);

//   const getCategories = async () => {
//     const response = await fetch("https://api.thecatapi.com/v1/categories");
//     const result = await response.json();
//     setCategoris(result);
//   };

//   return (
//     <>
//       <ScrollView>
//         <View
//           style={{
//             padding: "25%",
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center"
//           }}
//         >
//           {categoris.map(el => (
//             <View>
//               <Text style={{ color: "#000000" }}>{el.name}</Text>
//             </View>
//           ))}
//         </View>
//       </ScrollView>
//     </>
//   );
// };
