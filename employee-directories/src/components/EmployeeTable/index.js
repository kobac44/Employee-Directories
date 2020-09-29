import React, { Component } from "react";
import API from "../../utils/API";
// import "./EmployeeTable.css";
import EmployeeList from "../EmployeeList/index.js";

export default class EmployeeTable extends Component {
  async componentDidMount() {
    const response = await API.getUsers();
    console.log(response);
  }

  // render() {
  //   return (
  //     <div id="table">
  //       <div id="tableHeader">
  //         <p id="img">Image</p>
  //         <p id="name">Name</p>
  //         <p id="phone">Phone</p>
  //         <p id="email">Email</p>
  //         <p id="dob">DOB</p>
  //       </div>
  //     </div>
  //   );
  // }
}
