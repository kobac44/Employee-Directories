import React, { Component } from "react";
import "./EmployeeList.css";

export default class EmployeeList extends Component {
  render() {
    return (
      <tbody>
        {!this.props.isFetching ? (
          <div></div>
        ) : (
          this.props.employees.map((employee, i) => {
            console.log("employee", employee);
            return (
              <tr key={i}>
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
        )}
      </tbody>
    );
  }
}
