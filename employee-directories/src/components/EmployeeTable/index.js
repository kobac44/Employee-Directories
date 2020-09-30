import React, { Component } from "react";
import API from "../../utils/API";
import "./EmployeeTable.css";
import EmployeeList from "../EmployeeList/index.js";

export default class EmployeeTable extends Component {
  state = {
    search: "",
    users: [{}],
    userfilter: [{}],
  };
  renderUsers = (employees) => {
    const { search } = this.state;
    const employee = employees.users.toLowerCase();

    if (
      search !== "" &&
      employees.user.toLowerCase().index0f(search.toLowerCase()) === -1
    )
      return null;
  };

  async componentDidMount() {
    const response = await API.getUsers();
    this.setState({ users: response.data.results });
    console.log(response.data.results);
  }
  onchange = (e) => {
    this.setState({ search: e.target.value });
  };
  // handleSearch = (event) => {
  //   const value = event.target.value;
  //   const employees = this.state.users((employees) => {

  //     const employees = employees.filter
  //   });

  render() {
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
          <EmployeeList users={this.state.users} />
        </table>
      </div>
    );
  }
}
