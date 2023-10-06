import { useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";

import Cards from "../components/Cards";

const Home = () => {
  const services = useLoaderData();
  console.log(services);
  return (
    <div>
      <Banner></Banner>
      <h2 className="text-2xl text-center my-6">Our services</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
        {services.map((service) => (
          <Cards key={service.id} service={service}></Cards>
        ))}
      </div>
    </div>
  );
};

export default Home;
