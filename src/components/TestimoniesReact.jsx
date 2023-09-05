import { useState } from "react";
import data from "../data";
import TestimonyCardsReact from "./TestimonyCardsReact";

const TestimoniesReact = () => {
  const [index, setIndex] = useState(0);

  const isActive = (currentIndex) => {
    return currentIndex === index;
  };

  return (
    <div className="flex flex-col gap-10 md:flex-row my-10">
      <TestimonyCardsReact
        image={data[index].image}
        name={data[index].name}
        testimony={data[index].testimony}
        index={index}
      />

      <div className="text-center">
        {data.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`inline-block tranisition-all duration-[0.6s] ease-linear cursor-pointer h-[15px] w-[15px] mx-[2px] bg-[#bbb] rounded-full active:bg-orange-600 hover:bg-orange-600 ${
              isActive(index) ? "bg-orange-600" : ""
            }`}
            onClick={() => setIndex(index)}></button>
        ))}
      </div>
    </div>
  );
};

export default TestimoniesReact;
