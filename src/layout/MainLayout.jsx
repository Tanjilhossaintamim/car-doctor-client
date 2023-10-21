import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/Navbar";

export const Main = () => {
  return (
    <div className="max-w-6xl mx-auto font-inter">
      <Navbar />
      <Outlet />
    </div>
  );
};
