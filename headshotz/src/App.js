import React from 'react';
import Cam from './componets/camera';
import ImagePreview from './componets/ImagePreview';
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
          <Route path="/" exact component={Home} />  
          <Route path="/home" exact component={Home} />  
          <Route path="/camera" exact component={Cam} />
          <Route path="/camera" exact component={ImagePreview} /> 
      </Switch>
    </Router>


  );
}
export default App;
