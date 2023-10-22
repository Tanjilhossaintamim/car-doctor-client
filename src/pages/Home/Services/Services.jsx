import { useEffect } from "react";
import { useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("/services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="my-10 px-4 lg:px-0">
      <div className="text-center">
        <h3 className="text-xl font-bold text-color-orange leading-none mb-5">
          Service
        </h3>
        <h1 className="text-4xl font-bold text-color-dark-1 mb-5">
          Our Service Area
        </h1>
        <p className="text-base text-color-dark-3 w-2/3 mx-auto mb-5">
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don&apos;t look even slightly
          believable.{" "}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
