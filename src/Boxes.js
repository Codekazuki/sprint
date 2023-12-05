import "./index.css";
import { useState } from "react";

function Boxes() {
  const [name, setName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (name) {
      document.getElementById(
        "displayedName"
      ).innerText = `You entered: ${name}`;
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Enter your name:
          <input
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <input type='submit' />
      </form>
      {name && <div id='displayedName'></div>}
    </div>
  );
}
export default Boxes;
