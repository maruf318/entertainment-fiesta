import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { FcGoogle } from "react-icons/fc";

import swal from "sweetalert";
import { updateProfile } from "firebase/auth";

const Register = () => {
  const [errorText, setErrorText] = useState(null);
  const { signUp, googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate(null);

  const handleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    console.log(email, password);
    signUp(email, password)
      .then((result) => {
        console.log(result.user);
        updateProfile(result.user, {
          displayName: name,
          photoURL: photo,
        })
          .then(() => console.log("profile updated"))
          .catch();

        swal(
          "Account Created",
          "You are one step away of your events ",
          "success"
        );
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
        setErrorText(error.message);
        swal("Error", errorText, "error");
      });
    // console.log(errora);
  };
  const handleGoogle = () => {
    googleSignIn()
      .then((result) => {
        console.log(result.user);
        swal(
          "Google Login",
          "You are one step away of your events ",
          "success"
        );
        navigate("/");
      })
      .catch((error) => {
        setErrorText(error.message);
        swal("Error", errorText, "error");
      });
  };

  return (
    <div>
      <div className="hero min-h-screen bg-gradient-to-t from-black via-purple-500 to-pink-300">
        <div className="pb-8">
          <div className="text-center my-8 ">
            <h1 className="text-5xl font-bold text-white">Register now!</h1>
            <p className="py-6 text-white">
              Join us for an electrifying experience! Register now and dive into
              a world of thrilling events and unforgettable entertainment.
            </p>
          </div>
          <div className="card mx-auto flex-shrink-0 w-full max-w-sm shadow-2xl bg-black">
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="input text-black font-bold input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Photo URL</span>
                </label>
                <input
                  type="text"
                  name="photo"
                  placeholder="Photo URL"
                  className="input input-bordered text-black font-bold"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
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
                  name="password"
                  placeholder="Password"
                  className="input input-bordered text-black font-bold"
                  required
                />
                {/* <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label> */}
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-secondary">Register</button>
              </div>
              <p className="text-white">
                Already have an account? PLease{" "}
                <Link
                  to={"/login"}
                  className="font-bold text-purple-800 underline"
                >
                  Login
                </Link>
              </p>
            </form>
            <button
              onClick={handleGoogle}
              className="btn capitalize w-1/2 mx-auto text-black mb-4"
            >
              Sign In using Google <FcGoogle></FcGoogle>
            </button>
          </div>
        </div>
      </div>
      {/* <ToastContainer /> */}
    </div>
  );
};

export default Register;
