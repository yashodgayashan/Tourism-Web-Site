import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Places from "./components/places/Places";
import Vehicles from "./components/vehicles/Vehicles";
import AboutUs from "./components/aboutUs/AboutUs";
import "./Body.css";

const Body = () => {
  return (
    <Fragment>
      <div className="bodyDiv"></div>
      <Router>
        <Switch>
          <Route path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/places">
            <Places />
          </Route>
          <Route path="/vehicles">
            <Vehicles />
          </Route>
          <Route path="/contact-us">
            <AboutUs />
          </Route>
        </Switch>
      </Router>
    </Fragment>
  );
};

export default Body;
