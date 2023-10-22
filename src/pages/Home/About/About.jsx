import person from "../../../assets/images/about_us/person.jpg";
import parts from "../../../assets/images/about_us/parts.jpg";
const About = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center my-10 min-h-[500px] px-4 lg:px-0">
      <div className="lg:w-1/2 relative">
        <img src={person} alt="" className="w-3/4 rounded-lg" />
        <img
          src={parts}
          alt=""
          className="w-1/2 absolute right-10 top-1/2 border-8 rounded-lg border-white"
        />
      </div>
      <div className="lg:w-1/2 flex flex-col space-y-6">
        <h3 className="text-xl font-bold text-color-orange">About Us</h3>
        <h1 className="text-4xl text-color-dark-1 font-bold">
          We are qualified & of experience in this field
        </h1>
        <p className="text-base text-color-dark-3 capitalize">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don&apos;t look even slightly
          believable.{" "}
        </p>
        <p className="text-base text-color-dark-3 capitalize">
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don&apos;t look even slightly
          believable.
        </p>
        <button className="w-[170px] h-14 rounded-md bg-color-orange text-white ">
          Get More Info
        </button>
      </div>
    </div>
  );
};

export default About;
