import React from "react";

//basically card which is the componenet is the props within the function
function Card(props) {
  return (
 
      <div className="Mainboard">
        <div className="Jobcard">
          <h3 className="thejobtitle">{props.JobTitle}</h3>
          <h6 className="thedepartment">{props.Department}</h6>
          <h6 className="thelocation">{props.Location}</h6>
          <p className="thedescription">{props.Description}</p>
          <p className="thesalary">{props.Salary}</p>
        </div>
      </div>

  );
}

export default Card;
