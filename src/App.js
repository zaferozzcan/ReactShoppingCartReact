import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
// import Home from "./components/Home";
// import Cart from "./components/Cart";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            {/* <Route exact path="/" component={} />
            <Route path="/cart" component={} /> */}
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
