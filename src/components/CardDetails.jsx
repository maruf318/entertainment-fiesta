import { useLoaderData, useParams } from "react-router-dom";

const CardDetails = () => {
  const { id } = useParams();

  const cards = useLoaderData();

  console.log(cards, id);
  const myCard = cards.find((card) => card.id == id);

  const { image_url, service_name, price, description } = myCard;
  console.log(myCard);
  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* <h2 className="text-2xl text-white">card details</h2> */}
      <div className="flex flex-col space-y-4">
        <img src={image_url} alt="" />
        <div className="space-y-4">
          <h2 className="text-3xl text-[#CB0C9F] font-bold">{service_name}</h2>
          <p className="text-white">{description}</p>
          <p className="text-[#CB0C9F]  font-bold"></p>
          <button className="btn text-2xl  bg-transparent  border-white text-[#CB0C9F]  font-bold">
            Price: {price}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
