const Cards = ({ service }) => {
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img src={service.image_url} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{service.service_name}</h2>
        <p>{service.price}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
