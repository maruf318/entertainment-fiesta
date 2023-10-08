import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Error from "../components/Error";
import CardDetails from "../components/CardDetails";
import PrivateRoute from "./PrivateRoute";
import Faq from "../pages/Faq";

import Review from "../pages/Review";
import Events from "../pages/Events";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/data.json"),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/faq",
        element: <Faq></Faq>,
      },
      {
        path: "/review",
        element: <Review />,
      },
      {
        path: "/events",
        element: <Events></Events>,
        loader: () => fetch("/eventData.json"),
      },
      {
        path: "/products/:id",
        element: (
          <PrivateRoute>
            <CardDetails></CardDetails>
          </PrivateRoute>
        ),
        loader: () => fetch("/data.json"),
      },
    ],
  },
]);

export default router;
