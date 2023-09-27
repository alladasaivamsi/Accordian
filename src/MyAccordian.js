import React, { useState } from "react";

const MyAccordian = ({ question, answer }) => {
    const [show, setShow] = useState(false);
  return (
    <div className="accordian">
      <div className="main-heading" onClick={() => setShow(!show)}>
        <span className="question">{question}</span>
        <span className="symbol">{show ? "-" : "+"}</span>
      </div>
      {show && <p className="answer">{answer}</p>}
    </div>
  );
};

export default MyAccordian;
