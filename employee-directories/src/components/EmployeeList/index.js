import React, { Component } from "react";
import "./EmployeeList.css";
import API from "../../utils/API";
export default class EmployeeList extends Component {
  state = {
    search: "",
    employees: [{}],
    isFetching: false,
  };
  async componentDidMount() {
    const response = await API.getUsers();
    this.setState({ employees: response.data.results });
    this.setState({ isFetching: true });
  }
  renderUsers = (employees) => {
    const { search } = this.state;
    const users = employees.toLowerCase();
    if (
      search !== "" &&
      users.employees.toLowerCase().index0f(search.toLowerCase()) === -1
    )
      return null;
  };
  onchange = (e) => {
    this.setState({ search: e.target.value });
  };
  render() {
    return (
      <tbody>
        {!this.state.isFetching ? (
          <div>Loading...</div>
        ) : (
          this.state.employees.map((employee) => {
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
        )}
      </tbody>
    );
  }
}
