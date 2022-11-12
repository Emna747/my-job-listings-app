import React from "react";

import Navbar from "./Navbar";
import Content from "./Content";
import Card from "./Card";
import Footer from "./Footer";
import database from "./database";

function createCard(jobPost) {
  return (
    <Card
      key={jobPost.id}
      id={jobPost.id}
      JobTitle={jobPost.JobTitle}
      Department={jobPost.Department}
      Location={jobPost.Location}
      Description={jobPost.Description}
      Salary={jobPost.Salary}
    />
  );
}

function App() {
  return (
    <div>
      <Navbar />
      <Content />
      {database.map(createCard)}

      <Footer />
    </div>
  );
}
export default App;
