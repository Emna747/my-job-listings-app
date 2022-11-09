import React from "react";

import Navbar from "./Navbar";
import Content from "./Content";
import Card from "./Card";
import Footer from "./Footer";
import database from "../../database";

function App() {
  return (
    <div>
      <Navbar />
      <Content />
      <Card
        JobTitle={database[0].JobTitle}
        Department={database[0].Department}
        Location={database[0].Location}
        Description={database[0].Description}
        Salary={database[0].Salary}
      />
      <Card
        JobTitle={database[1].JobTitle}
        Department={database[1].Department}
        Location={database[1].Location}
        Description={database[1].Description}
        Salary={database[1].Salary}
      />
      <Card
        JobTitle={database[2].JobTitle}
        Department={database[2].Department}
        Location={database[2].Location}
        Description={database[2].Description}
        Salary={database[2].Salary}
      />
      <Footer />
    </div>
  );
}
export default App;
