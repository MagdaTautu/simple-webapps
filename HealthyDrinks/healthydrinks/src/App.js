import React from "react";
import Home from './pages/Home';
import About from './pages/About';
import Store from './pages/Store';
import Testm from'./pages/Testm';
import Contact from'./pages/Contact';
import Footer from'./pages/Footer';
import Last from'./pages/Last';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";

function App() {
  return (
    <div className="App" id="ap">
      <Router>
        <Home></Home>
        <About></About>
        <Testm></Testm>
        <Store></Store>
        <Contact></Contact>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
