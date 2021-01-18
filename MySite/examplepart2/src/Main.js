import React from "react";
import App from "./App";
import AboutMe from "./AboutMe";
import { Route, Link } from "react-router-dom";

function Main() {
    return(
        <div>
            <Route exact path="/" component={App} />
            <Route exact path="/about" component={AboutMe} />
        </div>
    );
}

export default Main;