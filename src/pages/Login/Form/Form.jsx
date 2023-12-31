import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import axios from "axios";

const Form = () => {
  const { userLogin, signInWithGoogle } = useContext(AuthContext);

  const handelGoogleSignup = () => {
    signInWithGoogle().then((res) => console.log(res));
  };
  const handelLogin = (e) => {
    e.preventDefault();
    const form = e.target;

    const email = form.email.value;
    const password = form.password.value;
    userLogin(email, password)
      .then((res) => {
        axios
          .post(
            "http://localhost:5000/jwt",
            { user: email },
            { withCredentials: true }
          )
          .then((response) => console.log(response.data));
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="flex flex-col items-center border border-color-dark-6 rounded-lg justify-center">
      <h1 className="text-center text-color-dark-2 text-4xl font-semibold">
        Login
      </h1>
      <form
        className="flex flex-col gap-5 w-3/4 mx-auto mt-4"
        onSubmit={handelLogin}
      >
        <div className="flex flex-col space-y-2">
          <label
            htmlFor="email"
            className="text-lg font-semibold text-color-dark-2"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Your Email"
            className="h-[40px] border border-color-dark-6 rounded-lg px-4"
            required
          />
        </div>
        <div className="flex flex-col space-y-2">
          <label
            htmlFor="password"
            className="text-lg font-semibold text-color-dark-2"
          >
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Your password"
            className="h-[40px] border border-color-dark-6 rounded-lg px-4"
            required
          />
        </div>
        <button className="w-full h-[40px] bg-color-orange text-white rounded-lg text-xl font-semibold">
          Sign In
        </button>
        <p className="text-center text-lg text-color-dark-2 font-medium">
          Or Sign In with
        </p>
        <div className="flex justify-center items-center gap-4">
          <span className="w-12 h-12 rounded-full bg-[#F5F5F8] flex justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="31"
              height="31"
              viewBox="0 0 31 31"
              fill="none"
            >
              <path
                d="M17.3047 27.1211V16.5346H20.8761L21.407 12.3896H17.3047V9.74948C17.3047 8.55339 17.6379 7.73448 19.3545 7.73448H21.5297V4.03902C20.4714 3.9256 19.4076 3.87084 18.3432 3.87498C15.1863 3.87498 13.0189 5.80214 13.0189 9.34002V12.3819H9.4707V16.5269H13.0267V27.1211H17.3047Z"
                fill="#3B5998"
              />
            </svg>
          </span>
          <span className="w-12 h-12 rounded-full bg-[#F5F5F8] flex justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
            >
              <path
                d="M5.48292 7.697C6.69132 7.697 7.67092 6.7174 7.67092 5.509C7.67092 4.3006 6.69132 3.321 5.48292 3.321C4.27452 3.321 3.29492 4.3006 3.29492 5.509C3.29492 6.7174 4.27452 7.697 5.48292 7.697Z"
                fill="#0A66C2"
              />
              <path
                d="M9.73673 9.355V21.494H13.5057V15.491C13.5057 13.907 13.8037 12.373 15.7677 12.373C17.7047 12.373 17.7287 14.184 17.7287 15.591V21.495H21.4997V14.838C21.4997 11.568 20.7957 9.055 16.9737 9.055C15.1387 9.055 13.9087 10.062 13.4057 11.015H13.3547V9.355H9.73673ZM3.59473 9.355H7.36973V21.494H3.59473V9.355Z"
                fill="#0A66C2"
              />
            </svg>
          </span>
          <span
            onClick={handelGoogleSignup}
            className="w-12 h-12 rounded-full bg-[#F5F5F8] cursor-pointer flex justify-center items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <g clipPath="url(#clip0_351_972)">
                <path
                  d="M4.6875 10.0001C4.6875 9.00919 4.96051 8.08095 5.4348 7.28614V3.91474H2.0634C0.725313 5.65255 0 7.77048 0 10.0001C0 12.2297 0.725313 14.3476 2.0634 16.0854H5.4348V12.714C4.96051 11.9192 4.6875 10.991 4.6875 10.0001Z"
                  fill="#FBBD00"
                />
                <path
                  d="M10 15.3126L7.65625 17.6564L10 20.0001C12.2296 20.0001 14.3475 19.2748 16.0854 17.9367V14.5689H12.7175C11.9158 15.0449 10.9836 15.3126 10 15.3126Z"
                  fill="#0F9D58"
                />
                <path
                  d="M5.43488 12.7139L2.06348 16.0854C2.3284 16.4294 2.61688 16.7589 2.92902 17.0711C4.81777 18.9598 7.32898 20 10.0001 20V15.3125C8.06164 15.3125 6.3627 14.2688 5.43488 12.7139Z"
                  fill="#31AA52"
                />
                <path
                  d="M20 10.0001C20 9.39169 19.9449 8.78216 19.8363 8.18849L19.7483 7.70806H10V12.3956H14.7442C14.2835 13.312 13.5752 14.0597 12.7175 14.5689L16.0853 17.9367C16.4294 17.6718 16.7589 17.3833 17.0711 17.0712C18.9598 15.1824 20 12.6712 20 10.0001Z"
                  fill="#3C79E6"
                />
                <path
                  d="M13.7565 6.24354L14.1708 6.65783L17.4854 3.3433L17.0711 2.92901C15.1823 1.04026 12.6711 6.10352e-05 10 6.10352e-05L7.65625 2.34381L10 4.68756C11.419 4.68756 12.7531 5.24014 13.7565 6.24354Z"
                  fill="#CF2D48"
                />
                <path
                  d="M10.0001 4.68756V6.10352e-05C7.32902 6.10352e-05 4.81781 1.04026 2.92902 2.92897C2.61688 3.24112 2.3284 3.57061 2.06348 3.91471L5.43488 7.28612C6.36273 5.73131 8.06168 4.68756 10.0001 4.68756Z"
                  fill="#EB4132"
                />
              </g>
              <defs>
                <clipPath id="clip0_351_972">
                  <rect width="20" height="20" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </span>
        </div>
        <p className="text-base text-color-dark-3 text-center">
          Not Have an account ?{" "}
          <Link className="text-color-orange hover:underline" to={"/register"}>
            Register
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Form;
