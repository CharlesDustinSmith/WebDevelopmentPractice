import React from "react";
import Form, { Form2 } from "./Form";

var userIsRegistered = false;

function App() {
  return (
    <div className="container">
      {userIsRegistered ? <Form2 text="Login" /> : <Form text="Register" />}
    </div>
  );
}

export default App;
