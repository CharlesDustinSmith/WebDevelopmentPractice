import React, { useState } from "react";

function App() {
  const [headingText, setHeadingText] = useState("Hello");

  function handleClick() {
    console.log("Clicked");
    setHeadingText("Submitted");
  }

  const [isMouseOver, setMouseOver] = useState(false);

  function handleMouseHover() {
    setMouseOver(true);
    console.log("Hovering Over Submit Button" + isMouseOver);
  }

  function handleMouseNotHover() {
    setMouseOver(false);
    console.log("Not Hovering Over Sumbit Button" + isMouseOver);
  }

  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        style={{ backgroundColor: isMouseOver ? "black" : "white" }}
        onClick={handleClick}
        onMouseOver={handleMouseHover}
        onMouseOut={handleMouseNotHover}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
