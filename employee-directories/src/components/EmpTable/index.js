import React from "react";
import "./empTable.css";
import EmployeeList from "../EmployeeList/index.js";

function EmpTable(props) {
  return (
    <div id="table">
      <div id="tableHeader">
        <p onClick={props.OnFilter} id="img">
          Image
        </p>
      </div>
    </div>
  );
}

export default EmpTable;
