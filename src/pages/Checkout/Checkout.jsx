import { useLoaderData } from "react-router-dom";
import CheckoutImg from "../../assets/images/checkout/checkout.png";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import axios from "axios";

const Checkout = () => {
  const data = useLoaderData();
  const { user } = useContext(AuthContext);
  const { _id, title, price, img } = data || {};
  const handelBook = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const service = form.service.value;
    const price = form.price.value;
    const phone = form.phone.value;
    const email = form.email.value;
    const date = form.date.value;

    const booking = {
      customerName: name,
      img,
      service_id: _id,
      service,
      price,
      phone,
      email,
      date,
    };

    axios
      .post(
        "http://localhost:5000/booking",
        { booking },
        { withCredentials: true }
      )

      .then((res) => {
        if (res.data?.insertedId) {
          form.reset();
          alert("booked successfully");
        }
      })
      .catch((error) => console.log(error));
  };
  return (
    <section className="py-5">
      <div
        className="flex  items-center relative"
        style={{
          background: `linear-gradient(90deg, #151515 0%, rgba(21, 21, 21, 0.00) 100%),url(${CheckoutImg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "300px",
          width: "100%",
          borderRadius: "5px",
        }}
      >
        <h1 className="text-4xl font-bold text-white ml-20">Checkout</h1>
        <div className="absolute -bottom-0  mx-auto right-1/3 left-1/3 ">
          <div className="relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="296"
              height="50"
              viewBox="0 0 296 50"
              fill="none"
              className="mx-auto"
            >
              <path d="M296 49.3H0L27.8 0H268.3L296 49.3Z" fill="#FF3811" />
            </svg>
            <span className="text-xl text-white font-medium absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              Home/Checkout
            </span>
          </div>
        </div>
      </div>
      <div className=" p-8 bg-color-dark-8 my-10 rounded-md">
        <form onSubmit={handelBook}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              name="name"
              className="h-14 px-3 rounded-md outline-none text-color-gray"
              placeholder="Your Name"
              required
            />
            <input
              type="text"
              name="service"
              className="h-14 px-3 rounded-md outline-none text-color-gray cursor-not-allowed"
              placeholder="Service Name"
              defaultValue={title}
              readOnly
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <input
              type="number"
              name="phone"
              className="h-14 px-3 rounded-md outline-none text-color-gray"
              placeholder="Your Phone"
              required
            />
            <input
              type="email"
              name="email"
              defaultValue={user?.email}
              readOnly
              className="h-14 px-3 rounded-md outline-none text-color-gray cursor-not-allowed"
              placeholder="Your Email"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <input
              type="text"
              name="price"
              className="h-14 px-3 rounded-md outline-none text-color-gray cursor-not-allowed"
              placeholder="Your Phone"
              defaultValue={"$" + price}
              readOnly
            />
            <input
              type="date"
              name="date"
              className="h-14 px-3 rounded-md outline-none text-color-gray"
              required
            />
          </div>

          <button className="text-xl font-semibold w-full text-white bg-color-orange h-16 rounded-md mt-6">
            Order Confirm
          </button>
        </form>
      </div>
    </section>
  );
};

export default Checkout;
