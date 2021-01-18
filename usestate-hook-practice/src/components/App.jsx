import React, { useState } from "react";

function App() {
  setInterval(timeSetter, 1000);

  let time = new Date().toLocaleTimeString();
  const [timer, setTimer] = useState(time);

  function timeSetter() {
    const newTime = new Date().toLocaleTimeString();
    setTimer(newTime);
  }

  return (
    <div className="container">
      <h1>{timer}</h1>
      <button onClick={timeSetter}>Get Time</button>
    </div>
  );
}

export default App;
