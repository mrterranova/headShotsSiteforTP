import React from 'react';
import CameraComponent from './components/camera';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  return (
    <Router>
      <h1>Headshot Application</h1>
      <Switch>
          <Route path="/" exact component={CameraComponent} />
      </Switch>
    </Router>


  );
}
export default App;
