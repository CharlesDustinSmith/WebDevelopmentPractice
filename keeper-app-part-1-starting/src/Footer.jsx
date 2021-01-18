import React from "react";

let year = new Date().getFullYear();

function Footer() {
    return <footer>
        <p>Copyright © {year} Foxhill Labs. All Rights Reserved</p>
    </footer>; 
}

export default Footer;