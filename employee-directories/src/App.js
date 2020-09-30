import React, { Component } from "react";
import Main from "./components/Main";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import "./App.css";
import Footer from "./components/Footer";
import EmployeeTable from "./components/EmployeeTable";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="page-container">
          <div className="content-wrap">
            <Wrapper>
              <Header />
              <EmployeeTable />
              <Main />
              {/* <SearchForm OnSearch={this.handleSearch} /> */}
            </Wrapper>
          </div>
          <Footer />
          <div />
        </div>
      </div>
    );
  }
}
