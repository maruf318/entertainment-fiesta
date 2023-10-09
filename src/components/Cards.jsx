import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const Cards = ({ service }) => {
  const { image_url, service_name, price, id, short_description } =
    service || {};
  // console.log(service);
  return (
    <div className="card bg-white shadow-xl m-2">
      <figure>
        <img className="h-[300px]" src={image_url} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-2xl font-bold">{service_name}</h2>
        <small className="text-black">Description: {short_description}</small>
        <p className="text-xl font-semibold">Price: {price}</p>
        <div className=" w-full ">
          <Link
            to={`/products/${id}`}
            className="btn border-none bg-purple-200 text-pink-900 w-full"
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cards;
Cards.propTypes = {
  service: PropTypes.array,
};
