import { useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";

import Cards from "../components/Cards";
import Team from "../components/Team";
import Subscription from "../components/Subscription";
import Footer from "../components/Footer";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();
const Home = () => {
  const services = useLoaderData();
  console.log(services);
  return (
    <div>
      <Banner></Banner>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl text-center underline font-bold my-10 text-white">
          Our Services
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 ">
          {services.map((service) => (
            <Cards key={service.id} service={service}></Cards>
          ))}
        </div>
        <Subscription></Subscription>
        <h2 className="text-4xl underline text-center text-white font-bold mb-8">
          Our Team
        </h2>
        <Team></Team>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Home;
