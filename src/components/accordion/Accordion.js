import React, { useState } from "react";
import "./main.css";
import { footballQuestions } from "./data";

const Accordion = () => {
  const [selected, setSelected] = useState(null);
  function handleSelection(getCurrentId) {
    setSelected(getCurrentId === selected ? null : getCurrentId);
  }

  return (
    <section className='wrapper'>
      <div className='accordion'>
        {footballQuestions && footballQuestions.length > 0 ? (
          footballQuestions.map((data) => (
            <div className='item'>
              <div onClick={() => handleSelection(data.id)}>
                <h1 className='title'>{data.question}</h1>
                <span>+ </span>
              </div>
              {selected === data.id ? (
                <div className='answer'>{data.answer}</div>
              ) : null}
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
