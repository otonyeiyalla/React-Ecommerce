import React, { Component } from "react";
import { Icon, Input, Row } from "react-materialize";

/** Generate random numbers */
function OrderNumber() {
  let ordernumber = Math.random();
  ordernumber *= 100000;
  ordernumber = Math.floor(ordernumber);
  console.log("Order number:", ordernumber);
  return ordernumber;
}

class UserInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      select: "",
      date: new Date(),
      isToggleOn: ""
    };
  }

  /** Handles the radio button for delivery and pick up  */
  handleOnSelect = event => {
    this.setState({
      select: event.target.value
    });
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
    console.log("Option: ", event.target.value);
  };

  /** Handles the input date and checks if input is valid */
  /* 86400000 == 1000*60*60*24 (msecs -> secs -> mins -> hours) */
  handleDate = e => {
    let selectedDate = e.target.value;
    selectedDate = Date.parse(selectedDate);
    const stateDate = this.state.date.getTime();
    const days = Math.round(selectedDate / 86400000) % 7;
    const val = 3;
    if (selectedDate > stateDate) {
      if (days !== val) {
        console.log("we can deliver on:", e.target.value);
        this.setState(state => ({
          isToggleOn: !state.isToggleOn
        }));
      } else {
        console.log("Sorry we don't deliver on Sundays:", e.target.value);
        this.setState({
          isToggleOn: "0"
        });
      }
    } else {
      console.log("date selected is in the past:", e.target.value);
      this.setState({
        isToggleOn: "0"
      });
    }

    console.log("Prevent Default: ", typeof e.preventDefault);
  };

  /** A function that checks the selected option and
   * updates the DOM based on the selected option
   * as well as outputs an error message gotten
   * from the handle date interface
   */
  changeOption = () => {
    if (this.state.select === "pickup") {
      if (this.state.isToggleOn === "0") {
        var model1 = [];
        model1.push(
          <div key={model1.toString()}>
            Sorry we can not deliver on the date selected
          </div>
        );
      }
      return (
        <div>
          <fieldset>
            <Row>
              <div>
                <label>
                  <b>
                    Store Location: <Icon left>store</Icon>
                  </b>
                  Port Harcourt, Nigeria
                </label>
              </div>
            </Row>
            <Row>
              <div>
                <label>
                  <b>
                    Tel: <Icon left>phone</Icon>
                  </b>
                  +2348030000000
                </label>
              </div>
            </Row>
            <Row>
              {model1}
              <div>
                <span>
                  <Icon left>schedule</Icon>
                  <input
                    style={{ width: "35%" }}
                    name="selectedDate"
                    type="date"
                    onChange={this.handleDate}
                  />
                </span>
              </div>
            </Row>
          </fieldset>
        </div>
      );
    }
    if (this.state.select === "delivery") {
      if (this.state.isToggleOn === "0") {
        model1 = [];
        model1.push(
          <div key={model1.toString()}>
            Sorry we can not deliver on the date selected
          </div>
        );
      }
      return (
        <div>
          <fieldset>
            <Row>
              <Input s={16} label="Delivery Address" validate>
                <Icon>home</Icon>
              </Input>
            </Row>
            <Row>
              <div style={{ padding: "0.75rem" }}>
                <div>{model1}</div>
                <div>
                  <Icon left>schedule</Icon>
                  <input
                    style={{ width: "35%" }}
                    name="selectedDate"
                    type="date"
                    onChange={this.handleDate}
                  />
                </div>
              </div>
            </Row>
          </fieldset>
        </div>
      );
    }
  };

  render() {
    return (
      <div>
        <div>
          <form>
            <div className="form-check">
              {this.changeOption()}
              <div>
                <label>
                  <input
                    name="option"
                    type="radio"
                    value="pickup"
                    checked={this.state.select === "pickup"}
                    onChange={this.handleOnSelect}
                    className="form-check-input"
                  />
                  <span>Pick Up</span>
                </label>

                <label>
                  <input
                    name="option"
                    type="radio"
                    value="delivery"
                    checked={this.state.select === "delivery"}
                    onChange={this.handleOnSelect}
                  />
                  <span>Delivery</span>
                </label>
              </div>

              <div style={{ fontWeight: "bold", fontSize: "2em" }}>
                Contact Info
              </div>
              <Row>
                <Input s={16} label="Name" validate>
                  <Icon>account_circle</Icon>
                </Input>
              </Row>
              <Row>
                <Input s={16} label="Telephone" validate type="tel">
                  <Icon>phone</Icon>
                </Input>
              </Row>

              <Row>
                <Input s={16} label="Email (optional)" validate>
                  <Icon>email</Icon>
                </Input>
              </Row>
            </div>
          </form>
          <div style={{ fontWeight: "bold", fontSize: "2em" }}>
            Order Number: <OrderNumber />
          </div>
        </div>
      </div>
    );
  }
}

export default UserInfo;
