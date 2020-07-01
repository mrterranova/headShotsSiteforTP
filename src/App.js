import React from 'react';
import CameraComponent from './components/camera';
import NotFoundPage from './components/notFoundPage';
import NavBar from './components/navBar'

import './App.css';
import { Redirect, Route, Switch, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <h1>Headshot Application</h1>
      <NavBar/>
      <Switch> 
          <Route path="/"  component={CameraComponent} />
          <Route path="/*" component={NotFoundPage} />
      </Switch>
    </BrowserRouter>


  );
}
export default App;
