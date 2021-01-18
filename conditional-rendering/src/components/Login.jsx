import React from "react";
import Input from "./Input";

function Login() {
  return (
    <form className="form">
      <Input tpye="text" placeholer="Username" />
      <Input type="password" placeholer="Password" />
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
