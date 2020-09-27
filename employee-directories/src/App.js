import React from "react";
import Main from "./components/Main";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import "./App.css";
import Footer from "./components/Footer";
import EmpTable from "./components/EmpTable";

function App() {
  return (
    <div className="App">
      <div className="page-container">
        <div className="content-wrap">
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

export default App;
