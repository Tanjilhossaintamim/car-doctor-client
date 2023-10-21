import BannarImg1 from "../../../assets/images/banner/1.jpg";
import BannarImg2 from "../../../assets/images/banner/2.jpg";
import BannarImg3 from "../../../assets/images/banner/3.jpg";
import BannarImg4 from "../../../assets/images/banner/4.jpg";
import BannarImg5 from "../../../assets/images/banner/5.jpg";
import BannarImg6 from "../../../assets/images/banner/6.jpg";
import BannerLogo from "./BannerLogo";
import "swiper/css/bundle";
import "swiper/css";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

const Banner = () => {
  return (
    <div className="h-[600px] my-10">
      <Swiper>
        <SwiperButton />
        <SwiperSlide>
          <BannerLogo image={BannarImg5} />
        </SwiperSlide>
        <SwiperSlide>
          <BannerLogo image={BannarImg2} />
        </SwiperSlide>
        <SwiperSlide>
          <BannerLogo image={BannarImg3} />
        </SwiperSlide>
        <SwiperSlide>
          <BannerLogo image={BannarImg4} />
        </SwiperSlide>
        <SwiperSlide>
          <BannerLogo image={BannarImg1} />
        </SwiperSlide>
        <SwiperSlide>
          <BannerLogo image={BannarImg6} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

const SwiperButton = () => {
  const swiper = useSwiper();
  return (
    <div className="absolute bottom-20 z-40 right-20 flex items-center gap-6">
      <div
        className="h-14 w-14 rounded-full bg-[#ffffff33] flex justify-center items-center cursor-pointer"
        onClick={() => swiper.slidePrev()}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
        >
          <path
            d="M19.5 12.7755L4.5 12.7755M4.5 12.7755L11.25 19.5255M4.5 12.7755L11.25 6.02551"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div
        className="h-14 w-14 rounded-full bg-color-orange flex justify-center items-center cursor-pointer"
        onClick={() => swiper.slideNext()}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
        >
          <path
            d="M4.5 12.7755H19.5M19.5 12.7755L12.75 6.02551M19.5 12.7755L12.75 19.5255"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
};

export default Banner;
