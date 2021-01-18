import React from "react";
import Login from "./Login";

var isLoggedIn = false;

const currentTime = new Date().getHours();
console.log(currentTime);

function App() {
  return (
    <div className="container">
      {isLoggedIn ? <h1>Hello</h1> : <Login />}
      {currentTime > 15 ? (
        <h1>Why are you still working at this time?</h1>
      ) : null}
      {currentTime > 15 && <h1>Why are you still working at this time?</h1>}
    </div>
  );
}

export default App;
