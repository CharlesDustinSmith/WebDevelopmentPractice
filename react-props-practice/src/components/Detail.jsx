import React from "react";

function Detail (props) {
    return <div className="bottom">
    <p className="info">{props.detailtel}</p>
    <p className="info">{props.detailemail}</p>
  </div>
}

export default Detail;