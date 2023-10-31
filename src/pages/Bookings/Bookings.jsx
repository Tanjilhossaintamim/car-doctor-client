import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import axios from "axios";

const Bookings = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);
  const url = `http://localhost:5000/bookings/?email=${user?.email}`;

  useEffect(() => {
    // fetch(url)
    //   .then((res) => res.json())
    //   .then((data) => setBookings(data));
    axios
      .get(url, { withCredentials: true })
      .then((res) => setBookings(res.data));
  }, []);
  const handelDelete = (id) => {
    const proceed = confirm("Are Your Sure?");
    if (proceed) {
      axios
        .delete(`http://localhost:5000/bookings/${id}`, {
          withCredentials: true,
        })

        .then((res) => {
          if (res?.data.deletedCount === 1) {
            const remaining = bookings.filter((booking) => booking._id !== id);
            setBookings(remaining);
          }
        });
    }
  };
  return (
    <div>
      <div className="container mx-auto p-6 font-mono">
        <div className="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
          <div className="w-full overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
                  <th className="px-4 py-3">#</th>
                  <th className="px-4 py-3">Service</th>
                  <th className="px-4 py-3">Phone</th>
                  <th className="px-4 py-3">Price</th>
                  <th className="px-4 py-3">Date</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {bookings.map((booking) => {
                  const { service, phone, price, date, img, _id } = booking;
                  return (
                    <tr key={booking._id} className="text-gray-700">
                      <td className="px-4 py-3 text-xs border">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="30"
                          height="30"
                          viewBox="0 0 40 40"
                          fill="none"
                          className="cursor-pointer"
                          onClick={() => handelDelete(_id)}
                        >
                          <circle cx="20" cy="20" r="20" fill="#C70039" />
                          <path
                            d="M25 15L20 20L25 15ZM20 20L15 25L20 20ZM20 20L25 25L20 20ZM20 20L15 15L20 20Z"
                            fill="#444444"
                          />
                          <path
                            d="M20 20L15 15M25 15L20 20L25 15ZM20 20L15 25L20 20ZM20 20L25 25L20 20Z"
                            stroke="white"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </td>
                      <td className="px-4 py-3 border">
                        <div className="flex items-center text-sm">
                          <div className="relative w-8 h-8 mr-3 rounded-full md:block">
                            <img
                              className="object-cover w-full h-full rounded-full"
                              src={img}
                              alt=""
                              loading="lazy"
                            />
                            <div
                              className="absolute inset-0 rounded-full shadow-inner"
                              aria-hidden="true"
                            ></div>
                          </div>
                          <div>
                            <p className="font-semibold text-black">
                              {service}
                            </p>
                            {/* <p className="text-xs text-gray-600">{price}</p> */}
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-3 text-ms font-semibold border">
                        {phone}
                      </td>
                      <td className="px-4 py-3 text-xs border">
                        <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm">
                          {" "}
                          {/* &#2547;{rent_price}{" "} */}
                          {price}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-sm border">{date}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bookings;
