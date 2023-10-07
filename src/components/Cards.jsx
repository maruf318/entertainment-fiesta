import PropTypes from "prop-types";
const Cards = ({ service }) => {
  return (
    <div className="card bg-white shadow-xl m-2">
      <figure>
        <img className="h-[300px]" src={service.image_url} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-2xl font-bold">
          {service.service_name}
        </h2>
        <p className="text-xl font-semibold">Price: {service.price}</p>
        <div className="card-actions justify-end">
          <button className="btn border-none bg-purple-200 text-pink-900 w-full ">
            Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
Cards.propTypes = {
  service: PropTypes.object,
};
