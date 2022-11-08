import React from "react";

let myName = "Emna";
let currentTime = new Date();
let currentYear = currentTime.getFullYear();

function Footer() {
  return (
    <h3>
      Made with love by {myName} in {currentYear}
    </h3>
  );
}

export default Footer;
