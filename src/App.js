import React, {Component} from "react";
import { Route, Link } from "react-router-dom";
import Home from "./pages/Home/index";
import About from "./pages/About/index";
import logo from './assets/img/logo.svg';

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <img src={logo} className="App-logo" alt="logo"/>

        <header>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </header>

        <main>
          <Route exact path="/" component={Home}/>
          <Route exact path="/about" component={About}/>
        </main>
      </div>
    )
  }
}

export default App;
