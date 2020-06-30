import React from 'react';
import CameraComponent from './components/camera';
import NotFoundPage from './components/notFoundPage';
import NavBar from './components/navBar'
import Home from './components/home';
import './App.css';
import { Redirect, Route, Switch, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <h1>Headshot Application</h1>
      <NavBar/>
      <Switch>
          <Route path="/camera" exact component={CameraComponent} />
          <Route path="/" exact component={Home} />  
          <Route path="/*" component={NotFoundPage} />
      </Switch>
    </BrowserRouter>


  );
}
export default App;
