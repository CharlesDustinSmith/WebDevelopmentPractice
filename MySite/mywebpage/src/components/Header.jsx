//jshint: version6
import React from "react";

function Header(){
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
            <div class="container">
                <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu 
                    <i class="fas fa-bars"></i>
                </button>
                <div class="collapse navbar-collapse" id="navbarResponsive">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#about">About</a></li>
                        <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#projects">Projects</a></li>
                        <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#signup">Contact</a></li>
                    </ul>
                </div>
            </div>
        </nav>
            <div class="imager">  
                <header class=" masthead">
                    <div class=" container d-flex h-100 align-items-center">
                        <div class="mx-auto text-center">
                            <h1 class="mx-auto my-0 text-uppercase">Charles Smith</h1>
                            <h2 class="text-white-50 mx-auto mt-2 mb-5">Memorial University of Newfoundland Computer Engineering Student</h2>
                        </div>
                    </div>
                </header>
            </div>
        </div>
    );
    
}

export default Header;