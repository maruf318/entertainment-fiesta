import { useLoaderData } from "react-router-dom";
import Event from "../components/Event";

const Events = () => {
  const allEvents = useLoaderData();
  console.log(allEvents);
  return (
    <div className="max-w-7xl mx-auto">
      <h2 className="border-y-2 my-8 p-3 text-center text-white text-4xl font-bold">
        Upcoming Events
      </h2>
      <div className="grid p-3 grid-cols-1 lg:grid-cols-2 gap-4">
        {allEvents.map((event) => (
          <Event key={event.id} event={event}></Event>
        ))}
      </div>
    </div>
  );
};

export default Events;
