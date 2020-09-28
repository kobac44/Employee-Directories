import React, { Component } from "react";
import Main from "./components/Main";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import API from "./utils/API";
import "./App.css";
import Footer from "./components/Footer";
import EmployeeTable from "./components/EmployeeTable";

class App extends Component {
  state = {
    employees: [],
    selected: [],
  };

  componentDidMount() {
    API.getUsers25().then((res) => {
      this.state({
        employees: res.data.results,
        selected: res.data.results,
      });
    });
  }

  render() {
    return (
      <div className="App">
        <div className="page-container">
          <div className="content-wrap">
            <EmployeeTable
              selected={this.state.selected}
              OnFilter={this.handleFilter}
            />
            <Wrapper>
              <Header />
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

export default App;
