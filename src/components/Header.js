import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header" style={{ width: "100%" }}>
      <div className="logo">
        <Link to="/">Pokemon</Link>
      </div>

      {/*       <div className="search-bar">

      </div> */}
    </div>
  );
};

export default Header;
