import { useContext } from "react";

import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useNavigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  // const navigate = useNavigate(null);
  if (loading) {
    return (
      <span className="loading text-center flex justify-center h-[100vh] items-center mx-auto loading-spinner loading-lg"></span>
    );
  }
  if (!user) {
    return <Navigate to={"/login"}></Navigate>;
  }
  return children;
};

export default PrivateRoute;
