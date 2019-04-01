import React, { Component } from "react";
import DrinksInfo from "./DrinksInfo";
import "./DrinkButton.css";

const display = {
  display: "block"
};
const hide = {
  display: "none"
};

class DrinkButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: false,
      selectedOption: " "
    };
    //console.log("Products: ", this.state.products[0].name);
  }

  /**   
    JSON file for all product    
    */

  //Event handler for the radio button
  handleOnChange = changeEvent => {
    this.setState({
      selectedOption: changeEvent.target.value
    });
    console.log("This works ", changeEvent.target.value);
  };

  //Event handler for the positive button
  handleIncrease = () => {
    if (this.state.quantity !== 10) {
      this.setState({
        quantity: this.state.quantity + 1
      });
    }
  };

  //Event handler for the nagative button
  handleDecrease = () => {
    if (this.state.quantity > 0) {
      this.setState({
        quantity: this.state.quantity - 1
      });
    }
  };

  //Check value to change to zero max or number
  CheckValue() {
    const { quantity } = this.props.products;
    console.log("the val in checkValue: ", quantity);
    if (quantity === 10) return "Max";
    return quantity === 0 ? "Zero" : quantity;
  }

  isToggleOn = () => {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
    console.log("The toggle button for model was pressed");
  };

  render() {
    var modal = [];

    modal.push(
      <div
        key={modal.toString()}
        className="modal"
        style={this.state.isToggleOn ? display : hide}
      >
        <div className="modal-content">
          {/* <h4>Modal Header</h4> */}
          <DrinksInfo
            onChange={this.handleOnChange}
            onCheck={this.state.selectedOption}
            onIncrease={this.handleIncrease}
            onDecrease={this.handleDecrease}
            onCheckValue={this.CheckValue()}
            isToggleOn={this.isToggleOn}
            products={this.props.products}
          />
        </div>

        {/* <div className="modal-footer">
          <span className="btn" onClick={this.isToggleOn}>
            Agree
          </span>
        </div> */}
      </div>
    );
    //const products = this.props.products;
    //console.log("Product: ", products);
    return (
      <div style={{ overFlow: "auto" }}>
        <React.Fragment>
          <div id="drinks-component">
            {modal}

            <button onClick={this.isToggleOn} className="drink-component">
              {this.props.products.name}
            </button>
          </div>
        </React.Fragment>
      </div>
    );
  }
}

export default DrinkButton;
