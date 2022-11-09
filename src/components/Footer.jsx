import React from "react";

let myName = "Emna";
let currentTime = new Date();
let currentYear = currentTime.getFullYear();

function Footer() {
  return (
    <p className="Pagefooter">
      Made with love by {myName} in {currentYear}
    </p>
  );
}

export default Footer;
