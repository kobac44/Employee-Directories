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
    API.getUsers(20).then((res) => {
      this.setState({
        employees: res.data.results,
        selected: res.data.results,
      });
      console.log("selected", this.state.selected);
    });
  }

  render() {
    return (
      <div className="App">
        <div className="page-container">
          <div className="content-wrap">
            <Wrapper>
              <Header />
              <EmployeeTable
                selected={this.state.selected}
                OnFilter={this.handleFilter}
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

export default App;
