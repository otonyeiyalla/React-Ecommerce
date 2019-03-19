import React, {
    Component
} from "react";
//import DrinkInfo from "./DrinkComponent/DrinkInfo";
import Navbar from "./navBar/Navbar";
//import Test from "./test"
import UserInfo from "./UserComponent/UserInfo";


import "./App.css";
import DrinkButton from "./DrinkComponent/DrinkButton";
import {
    Button,
    Icon
} from "react-materialize";

class App extends Component {
    // Write codes here;
    render() {
        return ( <
            div className = "App" >
            <
            header className = "App-header" >
            <
            Navbar / >
            <
            /header> <
            section className = "body-component" >
            <
            div className = "split left" >
            USER INFO <
            UserInfo / >
            <
            Button waves = "light"
            style = {
                {
                    backgroundColor: "red",
                    borderRadius: "15px"
                }
            } >
            <
            b > Check Out < /b> <
            Icon > shopping_cart < /Icon></Button >
            <
            /div> <
            div className = "split right" >
            <
            DrinkButton / >
            <
            /div> <
            /section> <
            /div>
        );
    }
}

export default App;