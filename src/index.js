import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import App from "./App";
import storeObj from "./redux/store";
import "modern-normalize/modern-normalize.css";
import "./styles/base.scss";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={storeObj.store}>
      <PersistGate loading={null} persistor={storeObj.persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
