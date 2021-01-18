import React from "react";
import Input from "./Input";

function Form(props) {
  return (
    <form className="form">
      <Input type="text" placeholder="Username" />
      <Input type="password" placeholder="Password" />
      <Input type="password" placeholder="Confirm Password" />
      <button type="submit">{props.text}</button>
    </form>
  );
}

function Form2(props) {
  return (
    <form className="form">
      <Input type="text" placeholder="Username" />
      <Input type="password" placeholder="Password" />
      <button type="submit">{props.text}</button>
    </form>
  );
}

export default Form;
export { Form2 };
