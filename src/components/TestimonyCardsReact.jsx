const TestimonyCardsReact = ({ image, name, testimony, index }) => {
  return (
    <div
      className="testimony-card grid grid-rows-2 mt-10 items-center text-center"
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
