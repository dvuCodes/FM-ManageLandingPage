import { useState } from "react";
import data from "../data";
import TestimonyCards from "./TestimonyCards.astro";

const TestimoniesReact = () => {
  const [index, setIndex] = useState(0);

  const previousOnClick = () => {
    setIndex(index - 1);
    if (index < 0) {
      setIndex(0);
    }
  };

  const nextOnClick = () => {
    setIndex(index + 1);
    if (index > data.length - 1) {
      setIndex(data.length - 1);
    }
  };

  return (
    <div class="flex flex-col md:flex-row my-10">
      <TestimonyCards
        image={data[index].image}
        name={data[index].name}
        testimony={data[index].testimony}
        index={index}
      />

      <button onClick={() => previousOnClick()}>Previous</button>
      <button onClick={() => nextOnClick()}>Next</button>
    </div>
  );
};

export default TestimoniesReact;
