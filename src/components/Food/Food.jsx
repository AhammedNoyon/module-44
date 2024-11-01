import PropType from "prop-types";
const Food = ({ food }) => {
  const { image, name, description, price } = food;
  return (
    <div className="space-y-3 border-2 rounded-xl border-cyan-600 p-4 flex flex-col">
      <div className="">
        <img className="w-full rounded-xl" src={image} alt="foods" />
      </div>
      <p className="text-3xl font-bold text-gray-400">
        <small>$: {price}</small>
      </p>
      <h3 className="text-4xl font-bold">{name}</h3>
      <p className="text-base font-semibold text-gray-400 w-3/4 flex-grow">
        {description}
      </p>
      <button className="bg-cyan-600 w-full p-2 rounded-xl text-white text-xl font-bold">
        Purchase
      </button>
    </div>
  );
};

Food.propTypes = {
  food: PropType.object,
};
export default Food;
