import React from "react";
import "./App.css";
import Header from "./Header";
import Footer from "./Footer";

function App() {
    return(
            <div className="App fullscreen">
                <Header />
                <div className="bg">
                    <div>
                        <div className="center">
                            <blockquote className="blocker" cite="https://www.engineering.com/DesignerEdge/DesignerEdgeArticles/ArticleID/14547/Top-10-Engineering-Quotes.aspx#:~:text=%20Listen%20to%20this%20story%20%201%20%E2%80%9CKeep,are%20wrong%2C%20but%20some%20are%20useful.%E2%80%9D%20More%20">“Others dream of things that were, and ask 'Why?'  I dream of things that never were, and ask 'Why not?'" <br />- Cardinal Saint-Saens </blockquote>
                        </div>
                    </div>
                </div>

                <Footer />
            </div>    
    );
}

export default App;