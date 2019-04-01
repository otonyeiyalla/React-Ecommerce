import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
//import DrinkButton from "./DrinkComponent/DrinkButton";
//import Test from "./test";
//import UserInfo from "./UserComponent/UserInfo";
//import DrinkInfo from "./DrinkComponent/DrinkInfo";

ReactDOM.render( < App / > , document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();