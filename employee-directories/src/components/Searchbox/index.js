import React from "react";
import "./Searchbox.css";

function Searchbox(props) {
  return (
    <div id="Searchbox">
      <input
        onChange={props.OnSearch}
        type="search"
        placeholder="Search"
      ></input>
    </div>
  );
}

export default Searchbox;
