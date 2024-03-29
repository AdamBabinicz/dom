import React, { useState, useEffect, Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Children from "./components/pages/Children";
import Family from "./components/pages/Family";
import House from "./components/pages/House";
import Gang from "./components/pages/Gang";
import Dzidka from "./components/pages/Dzidka";
import Adam from "./components/pages/Adam";
import Ania from "./components/pages/Ania";
import Ela from "./components/pages/Ela";
import Footer from "./components/Footer";
import Modal from "./components/modal/Modal";
import Slider from "./components/Slider";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/children" exact component={Children} />
        <Route path="/family" exact component={Family} />
        <Route path="/house" exact component={House} />
        <Route path="/gang" exact component={Gang} />
        <Route path="/dzidka" exact component={Dzidka} />
        <Route path="/adam" exact component={Adam} />
        <Route path="/ania" exact component={Ania} />
        <Route path="/ela" exact component={Ela} />
        <Route path="/ela" exact component={Ela} />
        <Route path="/slider" component={Slider} />
        <Route path="/modal" component={Modal} exact />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;

// https://www.youtube.com/watch?app=desktop&v=63UvEavSQUY

// https://www.youtube.com/watch?v=stHk7Pfh4Tw

// https://www.youtube.com/watch?v=tVHq2UHnNVI

// https://www.facebook.com/photo/?fbid=746047727527625&set=pb.100063672122059.-2207520000
