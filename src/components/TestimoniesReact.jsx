import { useState } from "react";
import data from "../data";
import TestimonyCardsReact from "./TestimonyCardsReact";

const TestimoniesReact = () => {
  const [index, setIndex] = useState(0);

  const previousOnClick = () => {
    if (index < 0) {
      setIndex(data.length - 1);
    } else setIndex(index - 1);
  };

  const nextOnClick = () => {
    setIndex(index + 1);
    if (index > data.length - 1) {
      setIndex(data.length - 1);
    }
  };

  console.log(data[index].image);
  console.log(index);

  return (
    <div className="flex flex-col gap-10 md:flex-row my-10 border">
      <TestimonyCardsReact
        image={data[index].image}
        name={data[index].name}
        testimony={data[index].testimony}
        index={index}
      />

      <div className="grid grid-cols-2 place-content-center">
        <button onClick={() => previousOnClick()} className="w-[25%]">
          Previous
        </button>
        <button onClick={() => nextOnClick()} className="w-[25%]">
          Next
        </button>
      </div>
    </div>
  );
};

export default TestimoniesReact;
