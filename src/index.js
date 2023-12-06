import React from "react";
import ReactDOM from "react-dom/client";

import MainForm from "./components/MainForm";
//redux
import { Provider } from "react-redux";
import { store } from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <div className="container">
      <MainForm />
    </div>
  </Provider>
);
