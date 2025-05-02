import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Features from './Pages/Features/Features';
import Careers from './Pages/Careers/Careers';
import Contact from './Pages/Contact/Contact';
import './index.css';

const App = () => {
  return (
    <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/features" component={Features} />
          <Route path="/careers" component={Careers} />
          <Route path="/contact" component={Contact} />
        </Switch>
    </Router>
  );
};

export default App;