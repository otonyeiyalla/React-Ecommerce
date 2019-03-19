import React, { Component } from "react";
import "./Navbar.css";
//import "materialize-css/dist/css/materialize.min.css";
//import M from "materialize-css/dist/js/materialize.min.js";
import { Icon } from "react-materialize";

class Navbar extends Component {
  //state = {  }

  render() {
    return (
      <div className="shop-header">
        <span>Home</span> | <span>Modify</span> |{" "}
        <span>
          <Icon>shopping_cart</Icon>
        </span>
      </div>
    );
  }
}

export default Navbar;
/** 
 *
  
 
<table>
          <tbody>
            <tr>
              <th>Home</th>
              <th>Modify</th>
            </tr>
          </tbody>
        </table>
        
 **/
