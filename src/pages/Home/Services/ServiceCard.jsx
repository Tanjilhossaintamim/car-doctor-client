import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const ServiceCard = ({ service }) => {
  const { _id, title, img, price } = service || {};
  return (
    <div className="border border-color-dark-6 rounded-lg p-4 flex flex-col lg:h-[348px]">
      <div className="flex-grow lg:h-[208px] relative">
        <img src={img} alt="" className="w-full object-cover" />
      </div>
      <div className="mt-2">
        <h1 className="text-2xl text-color-dark-2 font-bold">{title}</h1>
        <div className="mt-3 flex items-center justify-between">
          <span className="text-xl font-semibold text-color-orange">
            Price : ${price}
          </span>
          <Link to={`/checkout/${_id}`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M4.5 12H19.5M19.5 12L12.75 5.25M19.5 12L12.75 18.75"
                stroke="#FF3811"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};
ServiceCard.propTypes = {
  service: PropTypes.object,
};
export default ServiceCard;
