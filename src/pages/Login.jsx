import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import swal from "sweetalert";
import { toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate(null);
  const location = useLocation();
  // const navigate = useNavigate(null);
  const { logIn } = useContext(AuthContext);
  const notifySuccess = () =>
    toast.success("Logged in Successful", {
      position: "top-center",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  const notifyError = (error) =>
    toast.error(error, {
      position: "top-center",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    logIn(email, password)
      .then((result) => {
        // swal(
        //   "Logged in Successful",
        //   "You are one step away of your events ",
        //   "success"
        // );

        notifySuccess();
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.error(error);
        // swal("Try again", "Incorrect Email / Password ", "error");
        notifyError(error.message);
      });
  };

  return (
    <div className="">
      <div className="hero min-h-screen bg-gradient-to-t from-black via-purple-500 to-pink-300">
        <div className="">
          <div className="text-center my-8">
            <h1 className="text-5xl font-bold text-white">Login now!</h1>
            <p className="py-6 text-white">
              Welcome back! Log in to continue your entertainment journey and
              access your personalized experience.
            </p>
          </div>
          <div className="card mx-auto w-full max-w-sm shadow-2xl bg-black">
            <form onSubmit={handleLogin} className="card-body text-white">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  className="input input-bordered text-black font-bold"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  className="input input-bordered text-black font-bold"
                  required
                />
                <label className=" hover:text-pink-300 ">
                  <a href="#" className=" text-white hover:text-pink-300 ">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-secondary">Login</button>
              </div>
              <p>
                New in this site? Please{" "}
                <Link
                  to={"/register"}
                  className="font-bold text-purple-800 underline"
                >
                  Register
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
