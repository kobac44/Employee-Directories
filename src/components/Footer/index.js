import React from "react";
import "./Footer.css";
function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          <div className="col">
            <h4>
              WATKINS ENTERPRISE | 5503 W.LAKE STREET DURHAM NC | &copy;
              {new Date().getFullYear()}
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Footer;
