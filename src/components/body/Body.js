import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Places from "./components/places/Places";
import Vehicles from "./components/vehicles/Vehicles";
import AboutUs from "./components/aboutUs/AboutUs";

const Body = () => {
  return (
    <Fragment>
      <Router>
        <Switch>
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
