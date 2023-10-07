import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const Root = () => {
  return (
    <div className="bg-[#000000ee]">
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default Root;
