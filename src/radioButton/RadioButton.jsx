import React, { Component } from "react";

class RadioButton extends Component {
  /*
    constructor(props) {
    super(props);
    this.state = { selectedOption: this.props.selectedOption };
    console.log("In radio button", this.props.drink);
  }

  /* //Event handler for the radio button
  handleOnChange = changeEvent => {
    this.setState({
      selectedOption: changeEvent.target.value
    });
    console.log("This works ", changeEvent.target.value);
  };
  */

  render() {
    return (
      <div>
        <label>
          <input
            type="radio"
            name="drink-size"
            value={this.props.drink.value1}
            checked={this.props.selectedOption === this.props.drink.value1}
            onChange={this.props.onChange}
          />
          <span>Single 35cl bottle</span>
        </label>
      </div>
    );
  }
}

export default RadioButton;
