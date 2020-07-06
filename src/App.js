import React from 'react';
import NotFoundPage from './components/notFoundPage';
import NavBar from './components/navBar'
import Home from './components/home';



import "./App.css";
import { Redirect, Route, Switch, BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer";
function App() {
  return (
    <BrowserRouter>
      <div id="backsplash-wrapper">
        <div id="backsplash">
          <div>
            <img id="logo" src="/img/talentpath.png.png" />
            <h1 id="headshot-title">HEADSHOTS</h1>
          </div>
        </div>
      </div>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/*" component={NotFoundPage} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}
export default App;
