import React from "react";
import image from "../logo.png";
import { Avatar } from "antd";

function Navbar() {
  return (
    <div className="navbar">
      <div className="row">
        <div
          className="col-1"
          style={{
            marginLeft: "1rem",
            marginTop: "1rem",
            marginBottom: "0.5rem",
          }}
        >
          <Avatar size="large" src={image} />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
