import React, { Component } from "react";
import { Route } from "react-router-dom";
import Home from "../../pages/Home";
import About from "../../pages/About";

class Page extends Component {

  render() {
    return (
      <div className="content-wrapper">
        <section className="content-header">
          <h1>Page Header <small>Optional description</small></h1>
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
        </section>
      </div>
    );
  }
}

export default Page;
