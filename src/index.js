import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function Starter() {
  return <>hello world</>;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Starter />);
