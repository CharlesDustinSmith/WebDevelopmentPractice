import React, {useState} from "react";

function App() {

  const [count, setCount] = useState(0);

  const [red, green, blue] = [9, 132, 227];

  console.log(red);
  console.log(blue);
  console.log(green); 

  function counter() {
    // console.log(count);
    // count++;
    setCount(count + 1);
  }

  function decreaser() {
    setCount(count - 1);
  }

  return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={decreaser}>-</button>
      <button onClick={counter}>+</button>
    </div>
  );
  
}

export default App;


