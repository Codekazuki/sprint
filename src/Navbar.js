import React from "react";
import "./index.css";
import aworan from "./assets/rccg.png";

const Navbar = () => {
  return (
    <>
      <div className='nav-container'>
        <img src={aworan} alt='' />
        <ul className='nav-items'>
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
    </>
  );
};
export default Navbar;
