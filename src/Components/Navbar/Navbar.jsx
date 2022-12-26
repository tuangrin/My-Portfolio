import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    //     <div>
    //     <ul className="main-menu flex">
    //           <li><a href='#'>ABOUT ME</a></li>
    //           <li><a href='#'>MY SKILLS</a></li>
    //           <li><a href='#'>PROJECT</a></li>
    //           <li><a href='#'>EDUCATION</a></li>
    //           <li><a href='#'>CONTACT</a></li>
    //      </ul>
    //     </div>

    <div className="navbar">
      {/* <a href="#aboutme">ABOUT ME</a> */}
      <a href="#home">HOME</a>
      <a href="#skills">SKILLS</a>
      <a href="#project">PROJECT</a>
      {/* <a href="#edcation">EDUCATION</a> */}
      <a href="#contact">CONTACT</a>

    </div>
  );
};

export default Navbar;
