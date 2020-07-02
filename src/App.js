import React from 'react';
import CameraComponent from './components/camera';
import NotFoundPage from './components/notFoundPage';
import NavBar from './components/navBar'
import Home from './components/home'


import "./App.css";
import { Redirect, Route, Switch, BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer";
function App() {
  return (
    <BrowserRouter>
      <div className="heading">
        <div className="decor">.</div>
        <h1>Headshot Application</h1>
        <NavBar />
      </div>
      <br />
      <br />
      <Switch>
        <Route path="/camera" exact component={CameraComponent} />
        <Route path="/" exact component={Home} />
        <Route path="/*" component={NotFoundPage} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}
export default App;
