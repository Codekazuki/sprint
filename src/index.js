import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// const height = 34;
const location = "Lagos";
const quote = "lorem ipsium dato lumpsium";
const author = "Adejare Adeboye";
const img = "./assets/kazuki.jpg";
const title = "Beyond expectation";

function Starter() {
  return (
    <section>
      <Book title={title} img={img} location={location} />
      <Book title={title} img={img} author={author} />
      <Book title={title} img={img} quote={quote} />
      <Book title={title} img={img} />
    </section>
  );
}

const Book = (props) => {
  return (
    <>
      <p>{props.author}</p>
      <h1>{props.title}</h1>
      <img src={props.img} alt={props.title} />
      <h3>{props.location}</h3>
      <p>{props.quote}</p>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Starter />);
