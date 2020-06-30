import React from 'react';
import CameraComponent from './components/camera';
// import ImagePreview from './components/ImagePreview';
import NavBar from './componets/navBar'
import Home from './componets/home';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  return (
    <Router>
      <h1>Headshot Application</h1>
      <NavBar/>
      <Switch>
          <Route path="/camera" exact component={CameraComponent} />
          <Route path="/" exact component={Home} />  
      </Switch>
    </Router>


  );
}
export default App;
