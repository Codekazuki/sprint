import React, { useState } from "react";
import "./main.css";
import { footballQuestions } from "./data";

const Accordion = () => {
  const [selected, setSelected] = useState(null);
  function handleSelection(getCurrentId) {
    setSelected(getCurrentId);
  }

  return (
    <section className='wrapper'>
      <div className='accordion'>
        {footballQuestions && footballQuestions.length > 0 ? (
          footballQuestions.map((data) => (
            <div>
              <div onClick={() => handleSelection(data.id)}>
                <h1>{data.question}</h1>
                <span>+ </span>
              </div>
              {selected === data.id ? <div>{data.answer}</div> : null}
            </div>
          ))
        ) : (
          <div>There is no data at the moment</div>
        )}
      </div>
    </section>
  );
};

export default Accordion;
