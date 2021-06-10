import React from 'react';
import { Link } from "react-router-dom";

const Navbar =() => {
    return (
      <div className={"Container"}>
        <Link className="Content" to="/">Home</Link>
        <br></br>
        <Link className="Content" to="/room">Room Demo</Link>
        <br></br>
      </div>
    );
  };

  export default Navbar;