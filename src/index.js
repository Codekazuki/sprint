import React from "react";
import ReactDOM from "react-dom/client";

function Starter() {
  return (
    <>
      <Name />
      <Practice />
      <Book />
    </>
  );
}
const Name = () => <h1>Coachkazuki</h1>;
const Practice = () => {
  return <p>i am sprinting</p>;
};
const Book = () => {
  return (
    <>
      <Author />
      <Imag />
      <Title />
      <Content />
    </>
  );
};
const Author = () => <h1>Adejare Adeboye</h1>;
const Imag = () => <img src="" alt="Authors image" />;
const Title = () => <h1>Beyond expectation</h1>;
const Content = () => {
  return (
    <>
      <h3>Lorem ipsum dolor sit amet.</h3>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Starter />);
