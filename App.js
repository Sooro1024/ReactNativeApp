import React from "react";
import { Provider } from "react-redux";
import store from "./store/store";
import MainComponent from "./components/MainComponent";

export default function App() {
  return (
    <>
      <Provider store={store}>
        <MainComponent />
      </Provider>
    </>
  );
}
