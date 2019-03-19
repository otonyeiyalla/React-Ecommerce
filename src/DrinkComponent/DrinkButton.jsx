import React, { Component } from "react";
import DrinkInfo from "./DrinkInfo";
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
      isToggleOn: false
    };
  }

  //isToggleOn = event => {
  isToggleOn = () => {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
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
          <h4>Modal Header</h4>
          <DrinkInfo />
        </div>
        <div className="modal-footer">
          <span className="btn" onClick={this.isToggleOn}>
            Agree
          </span>
        </div>
      </div>
    );
    return (
      <div>
        <React.Fragment>
          <div id="drinks-component">
            {modal}
            <button onClick={this.isToggleOn} className="drink-component">
              DRINK
            </button>
          </div>
        </React.Fragment>
      </div>
    );
  }
}

export default DrinkButton;
