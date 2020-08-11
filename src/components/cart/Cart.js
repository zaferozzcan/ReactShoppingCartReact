import React, { Component } from "react";

class Cart extends Component {
  render() {
    return (
      <div className="container">
        <div className="cart">
          <h5>You have ordered:</h5>
          <ul className="collection">
            <h1> Added items here </h1>
          </ul>
        </div>
      </div>
    );
  }
}

export default Cart;
