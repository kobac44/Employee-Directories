import React from "react";
import API from "../../utils/API";
import "./EmployeeTable.css";
// import EmployeeList from "../EmployeeList/index.js";

state = {
  users: [{}],
};

export default class EmployeeTable extends Component {
  async componentDidMount() {
    this.setState({ users: response.data.results });
    const response = await API.getUsers();
    console.log(response);
  }


function EmployeeTable({ users }) {
  return (
    <tbody>
      users.map((employee) = {" "}
      {
        // tr with all the td of employee information
      }
    </tbody>
 )  
};


 export default EmployeeTable;