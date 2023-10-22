import { useEffect } from "react";
import { useState } from "react";
import ServiceCard from "./ServiceCard";
import SectionHeading from "../../../components/shared/SectionHeading/SectionHeading";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("/services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="my-10 px-4 lg:px-0">
      <SectionHeading
        heading={"Service"}
        subheading={"Our Service Area"}
        shortdesc={
          "the majority have suffered alteration in some form, by injected humour,or randomised words which don't look even slightly believable"
        }
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
