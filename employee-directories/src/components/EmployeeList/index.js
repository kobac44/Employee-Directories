import React from "react";
import "./employeeList.css";
import EmpFunct from "../EmpFunct";

function EmployeeList(props) {
  const list = props.selected.map((employee) => (
    <Employeefunct
      imageURL={employee.picture.thumbnail}
      first={employee.name.first}
      last={employee.name.last}
      phone={employee.name.phone}
      email={employee.email}
      dob={employee.dob.date}
    />
  ));
}
export default EmployeeList;
