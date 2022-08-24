import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import DataProvider from "../src/context/DataProvider";
import { Provider } from "react-redux";
import store from './redux/store';

ReactDOM.render(
  <Provider store={store}>
    <DataProvider>
      <App />
    </DataProvider>
  </Provider>,
  document.getElementById("root")
);
