import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const firstBook = {
  author: "Joshua selman",
  title: "area pastor",
  img: "./assets/kazuki.jpg",
  location: "Lagos",
  hobby: "praying",
};
const secondBook = {
  author: "olawanle Daniel",
  title: "zonal pastor",
  img: "./assets/kazuki.jpg",
  location: "Ikole",
  hobby: "singing",
};
const thirdBook = {
  author: "Uche Nwofor",
  title: "zonal pastor",
  img: "./assets/kazuki.jpg",
  location: "Abia",
  hobby: "fasting",
};

function Starter() {
  return (
    <section className="card">
      <Book
        author={firstBook.author}
        title={secondBook.title}
        img={firstBook.img}
        location={firstBook.location}
        hobby={firstBook.hobby}
      />
      <Book
        author={secondBook.author}
        title={secondBook.title}
        img={secondBook.img}
        location={secondBook.location}
        hobby={secondBook.hobby}
      />
      <Book
        author={thirdBook.author}
        title={thirdBook.title}
        img={thirdBook.img}
        location={thirdBook.location}
        hobby={thirdBook.hobby}
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
      <p>{props.hobby}</p>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Starter />);
