import React from "react";
import "./Header.css";
import {Link} from "react-router-dom"


function Header(){
    return (
        <div className="header">
            <header>
                <nav className="navbar navbar-dark bg-dark fixed-top">
                  <Link className="navbar-brand" to="/">Charles Dustin Smith</Link>
                  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>

                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                      <li class="nav-item active">
                        <Link className="nav-link" to="/about"> About Me </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" href="#">Projects</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" href="#">Live Chat</Link>
                      </li>
                    </ul>
                  </div>
                </nav>
            </header>            
        </div>
    );
    
}

export default Header;