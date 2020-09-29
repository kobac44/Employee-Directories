import React from "react";
import "./EmployeeList.css";
// import EmpFunct from "../EmpFunct";
import EmployeeTable from "../EmployeeTable";

function EmployeeList(props) {
  const table = props.selected.map((employee) => (
    <EmployeeTable
      imageURL={employee.picture.thumbnail}
      first={employee.name.first}
      last={employee.name.last}
      phone={employee.name.phone}
      email={employee.email}
      dob={employee.dob.date}
    />
  ));
  return table;
}
export default EmployeeList;
