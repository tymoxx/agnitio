import React, { Component } from "react";
import user2 from '../../assets/img/user2-160x160.jpg';
import { Route } from "react-router-dom";
import Home from "../../pages/Home";
import About from "../../pages/About";

// import { Route, Link } from "react-router-dom";
// import Header from "./components/Header/index";
// import Home from "./pages/Home/index";
// import About from "./pages/About/index";

class Page extends Component {

  render() {
    return (
      <div className="content-wrapper">
        {/* Content Header (Page header) */}
        <section className="content-header">
          <h1>
            Page Header
            <small>Optional description</small>
          </h1>
          <ol className="breadcrumb">
            <li><a href="#"><i className="fa fa-dashboard" /> Level</a></li>
            <li className="active">Here</li>
          </ol>
        </section>


        {/* Main content */}
        <section className="content container-fluid">
          <main>
            <Route exact path="/" component={Home}/>
            <Route exact path="/about" component={About}/>
          </main>
          {/*------------------------ | Your Page Content Here | ------------------------*/}
        </section>
        {/* /.content */}
      </div>
    );
  }
}

export default Page;
