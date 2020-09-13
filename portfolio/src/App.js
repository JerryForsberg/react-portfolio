import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import About from "./pages/About";
import Contact from "./pages/Contact";
import PastWork from "./pages/PastWork";
import Navbar from "./components/Navbar"

function App() {
  return (
    <Router>
      <Navbar />

      <Route exact path="/" component={About} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/past_work" component={PastWork} />


    </Router>
  );
}

export default App;
