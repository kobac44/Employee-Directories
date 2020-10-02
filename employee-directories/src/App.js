import React, { Component } from "react";
import Main from "./components/Main";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import "./App.css";
import Footer from "./components/Footer";
import Searchbox from "./components/Searchbox";
import EmployeeTable from "./components/EmployeeTable";
import API from "./utils/API";

export default class App extends Component {
  state = {
    search: "",
    results: [],
    employees: [],
    isFetching: true,
  };
  async componentDidMount() {
    const response = await API.getUsers();
    this.setState({
      employees: response.data.results,
      isFetching: true,
      filteredEmployees: response.data.results.employees,
    });
    // setState takes in one argument  which is a json object with (x) amount of keys
  }

  searchByName = () => {
    const filteredByEmployee = [...this.state.results].sort((a, b) =>
      a.name.last > b.name.last ? 1 : -1
    );
    console.log(filteredByEmployee);
    this.setState({ filteredEmployees: filteredByEmployee });
  };

  render() {
    return (
      <div className="App">
        <div className="page-container">
          <div className="content-wrap">
            <Wrapper>
              <Header />
              <Searchbox
                value={this.state.userInput}
                OnChange={(e) => this.handleInput(e)}
              />

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
