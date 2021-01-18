import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");

  function handleChange(event) {
    console.log(event.target.value);
    console.log(event.target.placeholder);
    console.log(event.target.type);
    setName(event.target.value);
  }

  const [submitPress, setSubmitPress] = useState("");

  function handleSubmit(event) {
    setSubmitPress(name);

    event.preventDefault();
  }

  return (
    <div className="container">
      <h1>Hello {submitPress}</h1>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          type="text"
          placeholder="What's your name?"
          value={name}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
