import Navbar from "../../components/shared/Navbar/Navbar";

import Hero from "../Login/Hero/Hero";
import Form from "./Form/Form";

const Register = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <Navbar />
      <div className="grid grid-cols-1 lg:grid-cols-2 my-6">
        <Hero />
        <Form />
      </div>
    </div>
  );
};

export default Register;
