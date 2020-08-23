import React from 'react';
import Home from './Components/Home';
import { CssBaseline } from '@material-ui/core';
import Header from './Components/Header';
import { Route } from "react-router-dom";
import Education from './Components/Education';
import Resume from './Components/Resume';
import About from './Components/About';


function App() {
  return (
    <>
    <CssBaseline />
      <Header />
      <Route exact path = "/My_Portfolio" component = {Home} />
      <Route  path = "/My_Portfolio/Education" component = {Education} />
      <Route  path = "/My_Portfolio/Resume" component = {Resume} />
      <Route  path = "/My_Portfolio/About" component = {About} />
      <Route  path = "/My_Portfolio/Contact" component = {Home} />
    </>
  );
}

export default App;
