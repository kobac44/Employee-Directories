import React, { Component } from "react";
import Main from "./components/Main";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import "./App.css";
import Footer from "./components/Footer";
// import EmployeeTable from "./components/EmployeeTable";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="page-container">
          <div className="content-wrap">
            <Wrapper>
              <Header />
              <div id="table">
                <div id="tableHeader">
                  <p id="img">Image</p>
                  <p id="name">Name</p>
                  <p id="phone">Phone</p>
                  <p id="email">Email</p>
                  <p id="dob">DOB</p>
                </div>
              </div>
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
