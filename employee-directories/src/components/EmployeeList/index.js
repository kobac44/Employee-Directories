import React from "react";
import "./EmployeeList.css";
// // import EmpFunct from "../EmpFunct";
// import EmployeeTable from "../EmployeeTable";

function EmployeeList({ users }) {
  return (
    <tbody>
      {users[0] !== undefined && users[0].name !== undefined ? (
        users.map((employee) => {
          return (
            <tr key={employee.login.uuid}>
              <td>
                <img
                  src={employee.picture.thumbnail}
                  alt={employee.name.first}
                />
              </td>
              <td>{employee.name.first}</td>
              <td>{employee.name.last}</td>
              <td>{employee.cell}</td>
              <td>{employee.email}</td>
              <td>{employee.dob.date}</td>
            </tr>
          );
        })
      ) : (
        <></>
      )}
    </tbody>
  );
}
export default EmployeeList;
