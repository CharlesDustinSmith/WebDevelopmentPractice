import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Main from "./components/Main";
import {BrowserRouter as Router, Switch, Link, Redirect, Route } from "react-router-dom";

//Pages

class App extends Component {
  render() {
    return <Router>
      <Route path="/" component={Main}/>
    </Router>
  }
}

// ReactDOM.render(
//   <App />,
//   document.getElementById("root")
// );

