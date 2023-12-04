import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Navbar from "./Navbar";

import Boxes from "./Boxes";
import Sprint from "./Sprint";

function Starter() {
  return (
    <>
      <Navbar />
      {/* <Boxes /> */}
      <Sprint />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Starter />);
