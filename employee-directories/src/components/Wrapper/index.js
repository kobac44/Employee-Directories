import React from "react";
import "./Wrapper.css";

// special children prop to pass children elements directly into their output:
function Wrapper({ children }) {
  return <div className="wrapper">{children} </div>;
}

export default Wrapper;
