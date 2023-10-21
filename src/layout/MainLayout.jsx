import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/Navbar/Navbar";
import Footer from "../components/shared/Footer/Footer";

export const Main = () => {
  return (
    <div>
      <div className="max-w-6xl mx-auto font-inter">
        <Navbar />
        <Outlet />
      </div>
      <div className="bg-color-dark-1">
        <Footer />
      </div>
    </div>
  );
};
