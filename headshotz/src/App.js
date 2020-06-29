import React from 'react';
import Cam from './componets/camera';
import ImagePreview from './componets/ImagePreview';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  return (
    <Router>
      <h1>Headshot Application</h1>
      <Switch>
          <Route path="/" exact component={Cam} />
          <Route path="/" exact component={ImagePreview} /> 
      </Switch>
    </Router>


  );
}
export default App;
