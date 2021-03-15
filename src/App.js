import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import './Custom.scss';

import Navigation from './Navigation';
import Footer from './Footer';

import Home from './Home/Home';
import Discover from './Discover/Discover';
import Story from './Story/Story';

import axios from './config/axios';

function App() {
  //WAKEUP SERVER!!!
  axios.get('/');

  return (
    <Router>
      <Navigation/>

      <Switch>
        <Route path="/discover">
          <Discover/>
        </Route>
        <Route path="/mapping">
          <h1>Mapping the NWC</h1>
        </Route>
        <Route path="/contribute">
          <h1>Why contribute?</h1>
        </Route>
        <Route path="/why-matters">
          <h1>Why the NWC Matters</h1>
        </Route>
        <Route path="/how-contribute">
          <h1>How to Contribute</h1>
        </Route>
        <Route path="/story/:id">
          <Story/>
        </Route>
        <Route path="/">
          <Home/>
        </Route>
      </Switch>

      <Footer/>
    </Router>
  );
}

export default App;