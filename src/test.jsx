import React, { Component } from "react";
//import DrinkInfo from "./DrinkComponent/DrinkInfo";
import { Icon, Input, Row } from "react-materialize";
//import Modal from "react-materialize/lib/Modal";

function OrderNumber() {
  let ordernumber = Math.random();
  ordernumber *= 100000;
  ordernumber = Math.floor(ordernumber);
  console.log("Order number:", ordernumber);
  return ordernumber;
}
document.addEventListener("mousewheel", onmousewheel, true);
class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      select: "",
      date: new Date(),
      isToggleOn: ""
    };
  }

  handleOnSelect = event => {
    this.setState({
      select: event.target.value
    });
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
    console.log("Option: ", event.target.value);
  };

  /* 
    addEventListener(document, "touchstart", function(e) {
    console.log(e.defaultPrevented);  // will be false
    e.preventDefault();   // does nothing since the listener is passive
    console.log(e.defaultPrevented);  // still false
  }, Modernizr.passiveeventlisteners ? {passive: true} : false);

  86400000 == 1000*60*60*24 (msecs -> secs -> mins -> hours)*/
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

    console.log("Prevent Default: ", e.preventDefault);
  };

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
