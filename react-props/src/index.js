import React from "react";
import ReactDOM from "react-dom";

function Card(props) {
  //console.log(props);

  return (
    <div>

      <h2>{props.name}</h2>
      <img
        src={props.img}
        alt="avatar_img"
      />
      <p>{props.tel}</p>
      <p>{props.email}</p>

    </div>
  );
}

ReactDOM.render(
  <div>
    <h1>My Contacts</h1>
    <Card 
      name="Beyonce" 
      img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg" 
      tel="+123 456 7899" 
      email="b@beyonce.com" 
    />
    <Card 
      name="JayZ" 
      img="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Jay-Z_%40_Shawn_%27Jay-Z%27_Carter_Foundation_Carnival_%28crop_2%29.jpg/800px-Jay-Z_%40_Shawn_%27Jay-Z%27_Carter_Foundation_Carnival_%28crop_2%29.jpg" 
      tel="242 435 3445" 
      email="cjwatts@hotmail.com" 
    />
    <input id="fName" />
  </div>,
  document.getElementById("root")
);