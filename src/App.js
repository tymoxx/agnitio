import React, {Component} from "react";
import { Route, Link } from "react-router-dom";
import Header from './components/Header/index';
import Home from "./pages/Home/index";
import About from "./pages/About/index";
import Page from "./components/Page";

class App extends Component {


  render() {
    return (
      <div className="wrapper">


        <Header />
        <Page />


      </div>
    )
  }
}

export default App;
