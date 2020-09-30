import React, { Component } from "react";
import Main from "./components/Main";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import "./App.css";
import Footer from "./components/Footer";
import Searchbox from "./components/Searchbox";
import EmployeeTable from "./components/EmployeeTable";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="page-container">
          <div className="content-wrap">
            <Wrapper>
              <Header />
              <Searchbox OnSearch={this.onchange} />
              <br></br>
              <EmployeeTable />
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
