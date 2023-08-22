import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const firstBook = {
  author: "Joshua selman",
  title: "area pastor",
  img: "./assets/kazuki.jpg",
  location: "Lagos",
};
const secondBook = {
  author: "P Daniel",
  title: "zonal pastor",
  img: "./assets/kazuki.jpg",
  location: "Ikole",
};

function Starter() {
  return (
    <section className="card">
      <Book
        author={firstBook.author}
        title={secondBook.title}
        img={firstBook.img}
        location={firstBook.location}
      />
      <Book
        author={secondBook.author}
        title={secondBook.title}
        img={secondBook.img}
        location={secondBook.location}
      />
    </section>
  );
}

const Book = (props) => {
  return (
    <div className="book">
      <p>{props.author}</p>
      <h1>{props.title}</h1>
      <img src={props.img} alt={props.title} />
      <h3>{props.location}</h3>
      <p>{props.quote}</p>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Starter />);
