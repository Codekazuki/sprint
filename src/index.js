import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Navbar from "./Navbar";

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
  hobby: "singing ",
};
const thirdBook = {
  author: "Uche Nwofor",
  title: "zonal pastor",
  img: ".assets/kazuki.jpg",
  location: "Abia",
  hobby: "fasting and paying",
};
const handleClick = () => {
  alert("button is clicked");
};
function Starter() {
  return (
    <>
      <section className="card">
        <Book
          author={firstBook.author}
          title={firstBook.title}
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
      <Navbar />
    </>
  );
}

const Book = ({ author, title, img, location, quote, hobby }) => {
  return (
    <div className="book">
      <p>{author}</p>
      <h1>{title}</h1>
      <img src={img} alt={title} />
      <h3>{location}</h3>
      <p>{quote}</p>
      <p>{hobby}</p>
      <button onClick={handleClick}>click</button>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Starter />);
