import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
  const { logOut, user } = useContext(AuthContext);
  console.log(user);
  const handleLogOut = () => {
    logOut().then().catch();
  };
  const navLinks = (
    <>
      <li>
        <NavLink
          className={
            "bg-transparent border-t-4 hover:bg-white rounded-lg px-2 py-4 text-[#CB0C9F] font-bold"
          }
          to={"/"}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={
            "bg-transparent border-t-4 hover:bg-white rounded-lg px-2 py-4 text-[#CB0C9F]  font-bold"
          }
          to={"/register"}
        >
          Register
        </NavLink>
      </li>
      <li>
        <NavLink
          className={
            "bg-transparent border-t-4 hover:bg-white rounded-lg px-2 py-4 text-[#CB0C9F] font-bold"
          }
          to={"/events"}
        >
          Events
        </NavLink>
      </li>
      {user ? (
        <li>
          <NavLink
            className={
              "bg-transparent border-t-4 hover:bg-white rounded-lg px-2 py-4 text-[#CB0C9F] font-bold"
            }
            to={"/faq"}
          >
            FAQ
          </NavLink>
        </li>
      ) : (
        ""
      )}
      {user ? (
        <li>
          <NavLink
            className={
              "bg-transparent border-t-4 hover:bg-white rounded-lg px-2 py-4 text-[#CB0C9F] font-bold"
            }
            to={"/review"}
          >
            Review
          </NavLink>
        </li>
      ) : (
        ""
      )}
    </>
  );
  return (
    <div className="navbar max-w-7xl mx-auto py-6">
      <div className="navbar-start">
        <div className="dropdown">
          <label
            tabIndex={0}
            className="btn bg-transparent text-[#CB0C9F] lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="5"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm text-[#CB0C9F] bg-purple-100  dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <a className=" flex  text-[#CB0C9F] font-bold normal-case text-xl">
          <span className="flex">
            <img src="/src/assets/icons8-entertainment-64.png" alt="" />
          </span>
          ENTERTAINMENT <br />
          FIESTA{" "}
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="space-x-3  menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end space-x-3">
        <div className="avatar">
          <div className="w-12 rounded-full ">
            {user?.photoURL ? (
              <img src={user.photoURL} />
            ) : (
              <img src="../../public/icons8-user.gif" />
            )}
            {/* <img src="../../public/icons8-user.gif" /> */}
          </div>
        </div>
        {user ? (
          <button
            onClick={handleLogOut}
            className="btn bg-transparent text-[#CB0C9F]"
          >
            LOGOUT
          </button>
        ) : (
          <Link to={"/login"}>
            <a className="btn bg-transparent text-[#CB0C9F]">Sign In</a>
          </Link>
        )}
        {/* <Link to={"/login"}>
          <a className="btn bg-transparent text-[#CB0C9F]">Sign In</a>
        </Link>
        <button
          onClick={handleLogOut}
          className="text-white border border-white"
        >
          LOGOUT
        </button> */}
      </div>
    </div>
  );
};

export default Navbar;
