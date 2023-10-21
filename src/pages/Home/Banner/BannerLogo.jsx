import PropTypes from "prop-types";
const BannerLogo = ({ image }) => {
  return (
    <div
      className="h-full rounded-xl"
      style={{
        background: `linear-gradient(0deg, rgba(0, 0, 0, 0.49), rgba(0, 0, 0, 0.49)),url(${image})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="ml-24 flex flex-col gap-5 pt-24">
        <h1 className="text-white text-5xl font-bold leading-[60px]">
          Affordable <br /> Price For Car <br /> Servicing
        </h1>
        <p className="text-lg capitalize text-white">
          There are many variations of passages of available, but <br /> the
          majority have suffered alteration in some form
        </p>
        <div className="flex items-center gap-6 text-lg">
          <button className="w-[170px] h-14 rounded-md bg-color-orange text-white ">
            Discover More
          </button>
          <button className="w-[170px] h-14 rounded-md bg-transparent text-white border border-white">
            Latest Project
          </button>
        </div>
      </div>
    </div>
  );
};
BannerLogo.propTypes = {
  image: PropTypes.string,
};
export default BannerLogo;
