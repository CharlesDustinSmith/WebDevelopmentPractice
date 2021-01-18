import React from "react";
import Avatar from "./avatar";
import Detail from "./Detail";

function App(props) {
  return (
    <div> 
      <div className="card">
        <div className="top">
          <h2 className="name">{props.name}</h2>
          {/* <img
            className="img circle-img"
            src={props.img}
            alt="avatar_img"
          /> */}
          <Avatar url={props.img}/>
        </div>
        <Detail 
          detailtel={props.tel}
          detailemail={props.email}
        />
      </div>
    </div>
  );
}

export default App;
