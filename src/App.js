import React from 'react';
import Home from './Components/Home';
import { CssBaseline,makeStyles } from '@material-ui/core';
import Header from './Components/Header';
import { BrowserRouter as Router,Route, Switch } from "react-router-dom";
import Education from './Components/Education';
import Resume from './Components/Resume';
import About from './Components/About';
import "./App.css";
import Particles from 'react-particles-js';

const useStyles = makeStyles(theme => ({

  particlesCanva: {
    position: "fixed"
  }
}))

function App() {
  const classes = useStyles();
  return (
    <Router>
      <>
      <CssBaseline />
        <Header />
        <Switch>
          <Route exact path = "/My_Portfolio" component = {Home} />
          <Route  path = "/My_Portfolio/Journey" component = {Education} />
          <Route  path = "/My_Portfolio/Resume" component = {Resume} />
          <Route  path = "/My_Portfolio/About" component = {About} />
          <Route  path = "/My_Portfolio/Contact" component = {Home} />
        </Switch>
        <Particles
        canvasClassName = {classes.particlesCanva}
          params={{
            "particles": {
              "number": {
                "value": 50
              },
              "size": {
                "value": 3
              }
            },
            "interactivity": {
              "events": {
                "onhover": {
                  "enable": true,
                  "mode": "repulse"
                }
              }
            }
          }} />
      </>
    </Router>
    
  );
}

export default App;
