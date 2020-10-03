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
    filteredEmployees: [],
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
    console.log(response.data.results);
    // setState takes in one argument  which is a json object with (x) amount of keys
  }

  // search filter is not working (currently)
  handleInput = (e) => {
    this.setState({
      userInput: e.target.value,
      filteredEmployees: [...this.state.employees].filter((employee) => {
        console.log("filter");
        const regex = new RegExp(e.target.value, "gi");
        return employee.name.last.match(regex);
      }),
    });
    console.log("employee");
  };

  //Sort function not working (currently)
  sortByName = () => {
    const filteredByName = [this.state.employees].sort((a, b) =>
      a.name.last > b.name.last ? 1 : -1
    );
    console.log(filteredByName);
    this.setState({ filteredEmployees: filteredByName });
  };

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
              {/* added a sort button to the main page */}
              <div>
                <hr />
                <button
                  onClick={this.sortByName}
                  className="btn btn-warning ml-2 mr-2 mb-4"
                >
                  Sort Last Name
                </button>
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
