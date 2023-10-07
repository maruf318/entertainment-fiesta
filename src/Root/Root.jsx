import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const Root = () => {
  return (
    <div className="bg-gradient-to-b from-black via-purple-500 to-pink-300">
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default Root;
