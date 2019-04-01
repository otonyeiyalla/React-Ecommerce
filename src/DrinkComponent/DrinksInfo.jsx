import React, { Component } from "react";
import "./drinkInfo.css";
import image from "./drink1.png";
import "materialize-css/dist/css/materialize.min.css";
import { Button, Icon, Table, Row, Col } from "react-materialize";
//import image from "./images/no_image.png";

class DrinksInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //selectedOption: " "
    };
  }

  drinkList = product => {
    let row = [];

    product.size.forEach(drink => {
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
                  value={product.name + " " + drink.size}
                  background-color="orange"
                  checked={
                    this.props.onCheck === product.name + " " + drink.size
                  }
                  //onChange={this.handleOnChange}
                  //checked={this.props.onCheck === "50cl"}
                  onChange={this.props.onChange}
                />
                <span>{drink.size} Single bottle</span>
              </label>
            </dt>

            <dt>
              <label>
                <input
                  type="radio"
                  name="drink-size"
                  value={product.name + " " + drink.crate}
                  background-color="orange"
                  checked={
                    this.props.onCheck === product.name + " " + drink.size
                  }
                  //onChange={this.handleOnChange}
                  //checked={this.props.onCheck === "50cl"}
                  onChange={this.props.onChange}
                />
                <span>{drink.crate} </span>
              </label>
            </dt>
          </td>
        </tr>
      );
    });

    return <React.Fragment>{row}</React.Fragment>;
  };

  styles = {
    fontWeight: "bold",
    fontSize: "20px",
    textAlign: "center",
    paddingTop: "1em"
  };

  render() {
    const products = this.props.products;
    // //console.log("Props content: ", products.size[0].size);
    //console.log("Product: ", products);
    return (
      <div>
        <form>
          <div id="drinkinfo-title">{this.props.products.name}</div>

          <Row>
            <Col s={5}>
              <span>
                <img src={image} alt="noimage" height="120" width="160" />
              </span>
            </Col>
            <Col s={7}>
              <Table hoverable responsive>
                <thead>
                  <tr>
                    <th data-field="id">Size</th>
                    <th data-field="price">Price</th>
                    <th data-field="crates">Type</th>
                  </tr>
                </thead>

                {/*  {products.map(product => (
                    <table key={product.toString()}>
                      {this.drinkList(product)}
                    </table>
                  ))} */}
                <tbody key={products.toString()}>
                  {this.drinkList(products)}
                </tbody>
              </Table>
            </Col>
          </Row>
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
        </form>
      </div>
    );
  }
}

export default DrinksInfo;
