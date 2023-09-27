import React, { useState } from "react";
import { Data } from "./AccordianData";
import MyAccordian from "./MyAccordian";
import "./Accordian.css";

const Accordian = () => {
  const [data, setData] = useState(Data);

  return (
    <div>
      <h1>Frequently Asked Questions</h1>
      {data.map((currentElement) => {
        const { id, question, answer } = currentElement;
        return <MyAccordian key={id} question={question} answer={answer} />;
      })}
    </div>
  );
};

export default Accordian;
