import React, { Component } from "react";
import Main from "./components/Main";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import "./App.css";
import Footer from "./components/Footer";
// import Searchbox from "./components/Searchbox";
import EmployeeTable from "./components/EmployeeTable";
import API from "./utils/API";

export default class App extends Component {
  state = {
    search: "",
    //
    filteredByEmployees: [],
    employees: [],
    isFetching: true,
    userInput: "",
  };
  async componentDidMount() {
    const response = await API.getUsers();
    this.setState({
      employees: response.data.results,
      isFetching: true,
      filteredEmployees: response.data.results.employees,
    });
    console.log(response.data.result);
    // setState takes in one argument  which is a json object with (x) amount of keys
  }

  handleInput = (e) => {
    this.setState({
      userInput: e.target.value,
      filteredEmployees: [...this.state.employees].filter((employee) => {
        const regex = new RegExp(e.target.value, "gi");
        return employee.name.last.match(regex);
      }),
    });
  };

  // searchByName = () => {
  //   const filteredByEmployee = [...this.state.results].sort(
  //     (a, b) => (a.name.last > b.name.last ? 1 : -1)
  //     // (a, b) => (a.name.first > b.name.first ? 1 : -1)
  //   );
  //   console.log(filteredByEmployee);
  //   this.setState({ filteredEmployees: filteredByEmployee });
  // };

  render() {
    console.log("employees", this.state.employees);

    return (
      <div className="App">
        <div className="page-container">
          <div className="content-wrap">
            <Wrapper>
              <Header />
              <div className="container">
                <input
                  value={this.state.userInput}
                  placeholder="Enter name to search for...."
                  onChange={(e) => this.handleInput(e)}
                />
              </div>
              <br></br>
              {/* key names are always on the left and the values on the right */}
              <EmployeeTable
                isFetching={this.state.isFetching}
                employees={this.state.employees}
              />
              <Main />
            </Wrapper>
          </div>
          <Footer />
          <div />
        </div>
      </div>
    );
  }
}
