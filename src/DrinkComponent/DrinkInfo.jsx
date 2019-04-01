import React, { Component } from "react";
import "./drinkInfo.css";
import drink1 from "./drink1.png";
import "materialize-css/dist/css/materialize.min.css";
import { Button, Icon, Table, Row, Col } from "react-materialize";
//import RadioButton from "./radioButton/RadioButton";

class DrinkInfo extends Component {
  constructor(props) {
    super(props);
    //Variables declearation
    this.state = {
      //drink: [{ id: 1, value1: "35cl" }, { id: 2, value: "35cl-crate" }],
      //quantity: 0,
      //selectedOption: " ",
      coke: {
        name: "Coke",
        price: 120,
        size: 35,

        description:
          "Your favourite drink refreshing and a must have, you should have some"
      }
    };
  }

  /*

  soft drink - coke fanta sprite RC lacasara limca pepsi
        35cl - 120      
        50cl - 150

        malt, grand malt, dubic malt
        pet

       beer - star, heineken, hero, guinness / stout
        can

        water - eva, estizam, george, laseim, 
        50ml 75ml 1.5L
 **/

  /*
  //Event handler for the radio button
  handleOnChange = changeEvent => {
    this.setState({
      selectedOption: changeEvent.target.value
    });
    console.log("This works ", changeEvent.target.value);
  };
*/

  /*
  //Event handler for the positive button
  handleIncrease = () => {
    if (this.state.quantity !== 10) {
      this.setState({
        quantity: this.state.quantity + 1
      });
    }
  };
  */

  /*
  //Event handler for the nagative button
  handleDecrease = () => {
    if (this.state.quantity > 0) {
      this.setState({
        quantity: this.state.quantity - 1
      });
    }
  };
  */

  /*
  //Check value to change to zero max or number
  CheckValue() {
    const { quantity } = this.props;
    console.log("the val in checkValue: ", quantity);
    if (quantity === 10) return "Max";
    return quantity === 0 ? "Zero" : quantity;
  }
  */

  styles = {
    fontWeight: "bold",
    fontSize: "20px",
    textAlign: "center",
    paddingTop: "1em"
  };

  render() {
    const product = this.props.products;
    console.log("Props content: ", product[0].size[0].small);

    return (
      <div>
        <form>
          <div id="drinkinfo-title">{this.props.products[1].name}</div>
          <Row>
            <Col s={5}>
              <span>
                <img src={drink1} alt="Drink1" height="120" width="120" />
              </span>
              <p>
                <b>Description:</b> {this.state.coke.description}
              </p>
            </Col>
            <Col s={7}>
              <Table hoverable responsive>
                <thead>
                  <tr>
                    <th data-field="id">Size</th>
                    <th data-field="price">Price</th>
                    <th data-field="crate">Type</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{this.state.coke.size}cl</td>
                    <td>
                      <Row>₦{this.state.coke.price}</Row>
                      <Row>₦1200.00</Row>
                    </td>
                    <td>
                      <Row>
                        <label>
                          <input
                            type="radio"
                            name="drink-size"
                            value="35cl"
                            checked={this.props.onCheck === "35cl"}
                            onChange={this.props.onChange}
                          />
                          <span>Single 35cl bottle</span>
                        </label>
                      </Row>
                      <Row>
                        <label>
                          <input
                            type="radio"
                            name="drink-size"
                            value="35cL-crate"
                            checked={this.props.onCheck === "35cL-crate"}
                            onChange={this.props.onChange}
                          />
                          <span>Crate of bottles</span>
                        </label>
                      </Row>
                    </td>
                  </tr>
                  <tr>
                    <td>50cl</td>
                    <td>
                      <Row>₦150.00</Row>
                      <Row>₦1500.00</Row>
                    </td>
                    <td>
                      <Row>
                        <label>
                          <input
                            type="radio"
                            name="drink-size"
                            value="50cl"
                            checked={this.props.onCheck === "50cl"}
                            onChange={this.props.onChange}
                          />
                          <span>Single 50cl bottle</span>
                        </label>
                      </Row>
                      <Row>
                        <label>
                          <input
                            type="radio"
                            name="drink-size"
                            value="50cL-crate"
                            checked={this.props.onCheck === "50cL-crate"}
                            onChange={this.props.onChange}
                          />
                          <span>Crate of bottles</span>
                        </label>
                      </Row>
                    </td>
                  </tr>
                  <tr>
                    <td>0cl</td>
                    <td>
                      <Row>₦7.00</Row>
                      <Row>₦700.00</Row>
                    </td>
                    <td>
                      <Row>
                        <label>
                          <input
                            type="radio"
                            name="drink-size"
                            value="3"
                            background-color="orange"
                            checked={this.props.onCheck === "3"}
                            onChange={this.props.onChange}
                          />
                          <span>Single bottle</span>
                        </label>
                      </Row>
                      <Row>
                        <label>
                          <input
                            type="radio"
                            name="drink-size"
                            value="4"
                            background-color="orange"
                            checked={this.props.onCheck === "4"}
                            onChange={this.props.onChange}
                          />
                          <span>Crate of bottles</span>
                        </label>
                      </Row>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Col>
          </Row>
        </form>
        <Row>
          <Col s={5}>
            <div>
              <Button waves="light" id="add-btn">
                ADD DRINK<Icon right>add</Icon>
              </Button>

              <Button
                waves="red"
                id="cancel-btn"
                onClick={this.props.isToggleOn}
              >
                CANCEL<Icon right>cancel</Icon>
              </Button>
            </div>
          </Col>
          <Col s={5}>
            <div style={this.styles}>
              Quantity
              <div>
                <button
                  onClick={this.props.onIncrease}
                  className="chip"
                  style={{ backgroundColor: "lightgreen" }}
                >
                  <Icon small>add</Icon>
                </button>
                <span className="chip" id="quantity-btn">
                  {this.props.onCheckValue}
                </span>
                <button
                  onClick={this.props.onDecrease}
                  className="chip"
                  style={{ backgroundColor: "lightcoral" }}
                >
                  <Icon small>remove</Icon>
                </button>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default DrinkInfo;

/**
                        <label>
                          <input
                            type="radio"
                            name="drink-size"
                            value="35cl"
                            checked={this.state.selectedOption === "35cl"}
                            onChange={this.handleOnChange}
                          />
                          <span>Single 35cl bottle</span>
                        </label>

<div>Name of Drink</div>
        <div>
          <table>
            <td>
              <div>
                <img src={drink1} alt="Drink1" height="60" width="60" />
                <p>Description: {this.state.description}</p>
              </div>
            </td>
            <td>
              <tr>
                <th>Size</th>
                <th>Price</th>
                <th>Quantity</th>
              </tr>
              <td>{this.state.size}</td>
              <td>{this.state.price}</td>
              <td>{this.state.quantity}</td>
            </td>
          </table>
          <p>Quantity: {this.state.quantity}</p>
          <button id="add-btn">ADD DRINK</button>
          <button id="cancel-btn">CANCEL</button>
        </div>

 

 **/
