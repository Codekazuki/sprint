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
  const handleDeleteAll = () => {
    setPeople([]);
  };

  const handleDelete = (id) => {
    const newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };
  const [active, setActive] = useState(false);
  const changeColor = () => {
    setActive(!active);
  };

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
          return (
            <div key={id}>
              <h1>{name}</h1>
              <button type="button" onClick={() => handleDelete(id)}>
                click me to delete
              </button>
            </div>
          );
        })}
        <button onClick={handleDeleteAll}>clear</button>
        <div className="divv">
          <button
            className="change-color"
            onClick={changeColor}
            style={{ color: active ? "red" : "green" }}
          >
            {" "}
            The colour would change when the button is clicked ...........
          </button>
        </div>
      </>
    </>
  );
};
export default Navbar;
