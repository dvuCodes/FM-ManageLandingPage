import "../styles/global.css";

const TestimonyCardsReact = ({ image, name, testimony, index }) => {
  return (
    <div
      className="fade tranisition-all duration-100 ease-linear fade testimony-card grid grid-rows-2 mt-10 items-center text-center"
      data-index={index}>
      <img
        src={image}
        alt="avatar ali"
        className="mx-auto -my-4"
        loading="lazy"
      />

      <h4 className="h-2 text-xl font-bold">{name}</h4>

      <p className="text-gray-600">{testimony}</p>
    </div>
  );
};

export default TestimonyCardsReact;
