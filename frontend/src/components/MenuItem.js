import React, { Component } from "react";
import "./css styles/MenuItem.css";

class MenuItem extends Component {

  
  state = {
    dishCount: this.props.dishValue,
    gradient: this.props.dishValue,
    green: this.props.dishValue,
  };

  addDish = () => {
    this.setState({ gradient: !this.props.dishValue });
    this.setState({ green: !this.state.green + 1 });
    this.setState({ dishCount: this.props.dishValue });
  };

  formatdishCount() {
    return this.props.dishValue === 0 ? "Add" : "Added";
  }

  render() {
    let btn_class =
      this.props.dishValue === 0 ? "gradientButton" : "greenButton";
    let text_class = this.props.dishValue === 0 ? "color" : "green";

    console.log("dish value--", props.dishvalue)

    return (
      <div className="menuItem">
        {this.props.image && (
          <div className="bothImage">
            <img className="image" src={this.props.image} alt="" />
            <img className="veg" src={this.props.veg} alt="" />
          </div>
        )}
        <div className="plswork">
          <div className="titleAndImageMenu">
            {this.props.image === null && (
              <img className="vegbox" src={this.props.veg} alt="" />
            )}
            <span className="dishName">{this.props.name}</span>
          </div>
          <span className="dishPrice">INR {this.props.price}</span>
          <span className="custom">{this.props.customizable}</span>
          <span className="dishDescription">{this.props.description}</span>
        </div>
        <div className="buttonDiv">
          {this.props.seller && (
            <div className="seller">{this.props.seller}</div>
          )}

          <div className={"add-button-container"}>
            <button
              className={btn_class}
              onClick={this.addDish}
              disabled={this.props.dishValue < 1 ? false : true}
            >
              <span className={text_class}>{this.formatdishCount()}</span>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default MenuItem;
