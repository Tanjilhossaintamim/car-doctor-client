import SectionHeading from "../../../components/shared/SectionHeading/SectionHeading";
import ProductImg1 from "../../../assets/images/products/1.png";
import ProductImg2 from "../../../assets/images/products/2.png";
import ProductImg3 from "../../../assets/images/products/3.png";
import ProductImg4 from "../../../assets/images/products/4.png";
import ProductImg5 from "../../../assets/images/products/5.png";
import ProductImg6 from "../../../assets/images/products/6.png";
import Product from "./Product";

const Products = () => {
  return (
    <div>
      <SectionHeading
        heading={"Popular Products"}
        subheading={"Browse Our Products"}
        shortdesc={
          "the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. "
        }
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-content-center gap-6 my-10">
        <Product img={ProductImg1} title="Car Engine Plug" price="$20.00" />
        <Product img={ProductImg2} title="Car Engine Plug" price="$20.00" />
        <Product img={ProductImg3} title="Car Engine Plug" price="$20.00" />
        <Product img={ProductImg4} title="Car Engine Plug" price="$20.00" />
        <Product img={ProductImg5} title="Car Engine Plug" price="$20.00" />
        <Product img={ProductImg6} title="Car Engine Plug" price="$20.00" />
      </div>
    </div>
  );
};

export default Products;
