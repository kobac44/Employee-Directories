import React from "react";
import "./EmployeeTable.css";
import EmployeeList from "../EmployeeList/index.js";

export default function EmployeeTable() {
  return (
    <div>
      <table className="table table-striped">
        <thead>
          <tr id="tableHeader">
            <th scope="img">Image</th>
            <th id="fname">First </th>
            <th id="lname">Last </th>
            <th id="phone">Phone</th>
            <th id="email">Email</th>
            <th id="dob">DOB</th>
          </tr>
        </thead>
        {/* setting props for employees list to be passed in as users */}
        <EmployeeList />
      </table>
    </div>
  );
}
