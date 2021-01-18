import React from "react";

function Footer(props) {
    return(
        <footer class="footer bg-black small text-center text-white-50"><div class="container">Copyright © Foxhill Labs {props.year} </div></footer>
    );
    
}

export default Footer;