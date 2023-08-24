import React from "react";
import "./index.css";
import logo from "./assets/kazuki.jpg";

import { useState } from "react";
import { date } from "./date";

const Navbar = () => {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
  };
  const [people, setPeople] = React.useState(date);
  return (
    <>
      <section className="nav">
        <img className="logo" src={logo} alt="here is it" />
        <p>you clicked {count} times</p>
        <button onClick={handleClick}>hello</button>
      </section>
      <>
        {people.map((person) => {
          const { id, name } = person;
          console.log(people);
          return <div key={id}>{name}</div>;
        })}
      </>
    </>
  );
};
export default Navbar;
