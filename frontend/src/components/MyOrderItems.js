import React, { Component } from "react";
import "./css styles/MyOrderItems.css";

class MyOrderItems extends Component {
  state = {
    // dishCount: this.props.dishValue,
    dishPrice: this.props.price,
    dishTotal: this.props.dishValue * this.props.price,
    dishReset: 0,
  };

  addDish = () => {
    this.setState({ dishCount: this.state.dishCount + 1 }, () => {
      this.setState({
        dishTotal: this.state.dishPrice * this.props.dishValue,
      });
    });
    this.props.addValue(this.props.id);

    this.setState({ dishCount: this.state.dishCount + 1 });
  };
  minusDish = () => {
    this.props.minValue(this.props.id);
    this.setState({ dishCount: this.state.dishCount - 1 }, () => {
      this.setState({
        dishTotal: this.state.dishPrice * this.props.dishValue,
      });
    });
  };

  deleteDish = () => {
    this.props.delValue(this.props.id);
  };

  pricePerDish = () => {
    this.setState({
      dishTotal: this.state.dishPrice * this.props.value,
    });
  };

  formatdishTotal() {
    const { dishTotal } = this.state;
    return this.props.dishValue === 1 ? this.props.price : dishTotal;
  }

  render() {
    return (
      <div>
        {this.props.dishValue > 0 ? (
          <div className="myOrder">
            <div className="titleAndImage">
              <img className="vegMyOrder" src={this.props.veg} alt="" />
              <span className="nameMyOrder">{this.props.name}</span>
            </div>
            <div>
              <span className="priceMyOrder">INR {this.props.price}</span>
            </div>

            <div className="customize">
              <span className="customMyOrder">{this.props.customizable}</span>
            </div>
            <div className="buttonMyOrder">
              <button
                onClick={this.minusDish}
                className="minus"
                disabled={this.props.dishValue > 1 ? false : true}
              >
                -
              </button>

              <span className="quantity">{this.props.dishValue}</span>
              <button onClick={this.addDish} className="plus">
                +
              </button>
            </div>
            <span className="totalPrice">INR {this.formatdishTotal()}</span>
            <button className="deleteDish" onClick={this.deleteDish}>
              remove
            </button>
          </div>
        ) : null}
      </div>
    );
  }
}

export default MyOrderItems;
