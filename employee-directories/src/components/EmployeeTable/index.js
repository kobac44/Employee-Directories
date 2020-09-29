import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import "./EmployeeTable.css";
import EmployeeList from "../EmployeeList/index.js";

function EmployeeTable() {
  const [props, updateEmployeeTable] = useState([]);
  useEffect(() => {
    fetch("https://randomuser.me/api/?results=200&nat=us").then((response) =>
      console.log(response.json())
    );
    updateEmployeeTable(props);
  });

  return (
    <div id="table">
      <div id="tableHeader">
        <p onClick={props.OnFilter} id="img">
          Image
        </p>
        <p onClick={props.OnFilter} id="name">
          Name
        </p>
        <p onClick={props.OnFilter} id="phone">
          Phone
        </p>
        <p onClick={props.OnFilter} id="email">
          Email
        </p>
        <p onClick={props.OnFilter} id="dob">
          DOB
        </p>
      </div>
    </div>
  );
}

export default EmployeeTable;
