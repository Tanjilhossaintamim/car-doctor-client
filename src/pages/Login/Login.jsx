import Navbar from "../../components/shared/Navbar/Navbar";
import Form from "./Form/Form";
import Hero from "./Hero/Hero";

const Login = () => {
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

export default Login;
