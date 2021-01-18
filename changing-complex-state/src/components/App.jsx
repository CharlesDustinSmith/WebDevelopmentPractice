import React, { useState } from "react";

function App() {
  const [fullName, setFullName] = useState({
    fName: "",
    mName: "",
    lName: ""
  });

  function handleFullName(event) {
    const newValue = event.target.value;
    const inputName = event.target.name;
    console.log(newValue + inputName);

    setFullName((prevValue) => {
      console.log(prevValue);
      if (inputName === "fName") {
        //Don't use event.target.name or any event in the function because will give you a synthetic error
        return {
          fName: newValue,
          mName: prevValue.mName,
          lNmae: prevValue.lName
        };
      } else if (inputName === "mName") {
        return {
          fName: prevValue.fName,
          mName: newValue,
          lName: prevValue.lName
        };
      } else {
        return {
          fName: prevValue.fName,
          mName: prevValue.mName,
          lName: newValue
        };
      }
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {fullName.fName} {fullName.mName} {fullName.lName}
      </h1>
      <form>
        <input
          onChange={handleFullName}
          name="fName"
          placeholder="First Name"
          value={fullName.fName}
        />
        <input
          onChange={handleFullName}
          name="mName"
          placeholder="Middle Name"
          value={fullName.mName}
        />
        <input
          onChange={handleFullName}
          name="lName"
          placeholder="Last Name"
          value={fullName.lName}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
