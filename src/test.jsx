import React, { Component } from "react";
import { Icon, Row, Col } from "react-materialize";
import image from "./images/no_image.png";

const datas = [
  {
    category: "soft drink",
    name: "Coke",
    size: [
      { size: "35cl", price: "120", crate: "35cl Crate", cprice: "1200" },
      { size: "50cl", price: "150", crate: "50cl Crate", cprice: "1500" }
    ],
    description: "about drink"
  }
  /* {
    category: "soft drink",
    name: "Fanta",
    size: [
      { size: "35cl", price: "120", crate: "35cl Crate", cprice: "1200" },
      { size: "50cl", price: "150", crate: "50cl Crate", cprice: "1500" }
    ],
    description: "about drink"
  },
  {
    category: "water",
    name: "Eva",
    size: [
      { size: "50ml", price: "100", crate: "50ml-Crate", cprice: "1000" },
      { size: "75ml", price: "120", crate: "75ml-Crate", cprice: "1200" },
      { size: "1.5L", price: "150", crate: "1.5L-Crate", cprice: "1500" }
    ],
    description: "about drink"
  } */
];

class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: " "
    };
  }

  //Event handler for the radio button
  handleOnChange = changeEvent => {
    this.setState({
      selectedOption: changeEvent.target.value
    });
    console.log("This works ", changeEvent.target.value);
  };

  pTable = prod => {
    let row = [];

    prod.size.forEach(drink => {
      //console.log("The size", size);

      row.push(
        <tr key={row.toString()}>
          <td>{drink.size}</td>
          <td>
            <dt>{drink.price}</dt>
            <dt>{drink.cprice}</dt>
          </td>
          <td>
            <dt>
              <label>
                <input
                  type="radio"
                  name="drink-size"
                  value={prod.name + " " + drink.size}
                  background-color="orange"
                  checked={
                    this.state.selectedOption === prod.name + " " + drink.size
                  }
                  onChange={this.handleOnChange}
                />
                <span>{drink.size} Single bottle</span>
              </label>
            </dt>

            <dt>
              <label>
                <input
                  type="radio"
                  name="drink-size"
                  value={prod.name + " " + drink.crate}
                  background-color="orange"
                  checked={
                    this.state.selectedOption === prod.name + " " + drink.crate
                  }
                  onChange={this.handleOnChange}
                />
                <span>{drink.crate} </span>
              </label>
            </dt>
          </td>
        </tr>
      );
    });

    return (
      <React.Fragment>
        <tbody>{row}</tbody>
      </React.Fragment>
    );
  };
  render() {
    console.log("Product: ", datas[0].name);
    return (
      <div>
        <div>{datas[0].name}</div>
        <Row>
          <Col>
            <span>
              <img src={image} alt="noimage" height="120" width="160" />
            </span>
          </Col>
          <Col>
            <React.Fragment>
              {datas.map(data => (
                <table key={data.toString()}>{this.pTable(data)}</table>
              ))}
            </React.Fragment>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Test;

/*


export default () => (
    <Button waves='light'>
      <Icon>thumb_up</Icon>
    </Button>
  )

  <div className="row mt-5">
          <div className="col-sm-12">
            <form>
              <div className="form-check">
                <label>
                  <input
                    type="radio"
                    name="react-tips"
                    value="option1"
                    background-color="orange"
                    checked={this.state.selectedOption === "option1"}
                    onChange={this.handleOnChange}
                    className="form-check-input"
                  />
                  <span>Option 1</span>
                </label>
              </div>

              <div className="form-check">
                <label>
                  <input
                    type="radio"
                    name="react-tips"
                    value="option2"
                    checked={this.state.selectedOption === "option2"}
                    onChange={this.handleOnChange}
                    className="form-check-input"
                  />
                  <span>Option 2</span>
                </label>
              </div>

              <div className="form-check">
                <label>
                  <input
                    type="radio"
                    name="react-tips"
                    value="option3"
                    checked={this.state.selectedOption === "option3"}
                    onChange={this.handleOnChange}
                    className="form-check-input"
                  />
                  <span>Option 3</span>
                </label>
              </div>

              <div className="form-group">
                <button className="btn btn-primary mt-2" type="submit">
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>

  <div>
        <p>Hello World</p>

        <Button waves="light">
          EDIT ME<Icon left>save</Icon>
        </Button>
      </div>

  handleIncrease = () => {
    if (this.state.value !== 10) {
      this.setState({
        value: this.state.value + 1
      });
    }
  };

  handledecrease = () => {
    if (this.state.value > 0) {
      this.setState({
        value: this.state.value - 1
      });
    }
  };

  CheckValue() {
    const { value } = this.state;
    if (value === 10) return "Max";
    return value === 0 ? "Zero" : value;
  }

  styles = {
    fontWeight: "bold",
    fontSize: "15",
    backgroundColor: "orange"
  };
  
<button
          onClick={this.handleIncrease}
          className="chip"
          style={{ backgroundColor: "lightgreen" }}
        >
          <Icon small>add</Icon>
        </button>
        <span className="chip" style={this.styles}>
          {this.CheckValue()}
        </span>
        <button
          onClick={this.handledecrease}
          className="chip"
          style={{ backgroundColor: "lightcoral" }}
        >
          <Icon small>remove</Icon>
        </button>

// Code for Model
        const display = {
  display: "block"
};
const hide = {
  display: "none"
};

  isToggleOn = event => {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  };

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

        <React.Fragment>
          <span className="btn" onClick={this.isToggleOn}>
            Modal
          </span>
          {modal}
        </React.Fragment>

  */
