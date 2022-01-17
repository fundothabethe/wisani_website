import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { combineReducers, createStore } from "redux";
import "bootstrap/dist/css/bootstrap.min.css";
import blur from "./redux/blur";
import classname from "./redux/classname";
import { BrowserRouter as Router } from "react-router-dom";

const store = createStore(combineReducers({ blur, classname }));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
