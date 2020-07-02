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
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/*" component={NotFoundPage} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}
export default App;
