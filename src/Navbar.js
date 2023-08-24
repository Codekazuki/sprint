import "./index.css";
import logo from "./assets/kazuki.jpg";
// import { data } from "./Data/Data.js";
import { useState } from "react";

const Navbar = () => {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <section className="nav">
      <img className="logo" src={logo} alt="here is it" />
      <p>you clicked {count} times</p>
      <button onClick={handleClick}>hello</button>
    </section>
  );
};
export default Navbar;
