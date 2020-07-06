import React from 'react';
import NotFoundPage from './components/notFoundPage';
import NavBar from './components/navBar'
import Home from './components/home';
import Instructions from './components/Instructions'
import LineItems from './components/LineItems'
import CameraComponent from './components/camera'


import "./App.css";
import { Route, Switch, BrowserRouter } from "react-router-dom";

function App() {
  return (

    <BrowserRouter>
      <div id="backsplash-wrapper">
        <div id="backsplash">
          <div>
            <img id="logo" src="/img/talentpath.png" />
            <h1 id="headshot-title">HEADSHOTS</h1>
          </div>
        </div>
      </div>
      <Switch>
        <Route path="/" exact component={CameraComponent} />
        <Route path="/instructions" exact component={Home} />
        <Route path="/instructionsDev" exact component={LineItems} />
        <Route path="/*" component={NotFoundPage} />
      </Switch>
      <Instructions />
    </BrowserRouter>
  );
}
export default App;
