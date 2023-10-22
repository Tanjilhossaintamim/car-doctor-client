import About from "./About/About";
import Banner from "./Banner/Banner";
import Products from "./Products/Products";
import Services from "./Services/Services";
import Time from "./Time/Time";

const Home = () => {
  return (
    <div>
      <Banner />
      <About />
      <Services />
      <Time />
      <Products />
    </div>
  );
};

export default Home;
