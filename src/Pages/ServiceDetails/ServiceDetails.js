import React from "react";
import { Link, useParams } from "react-router-dom";

const ServiceDetails = () => {
  const { serviceId } = useParams();
  return (
    <div>
      <h1> Service Details{serviceId}</h1>
      <div className="text-center">
        <Link to="/cheekout">
          <button className="btn btn-info">cheek out</button>
        </Link>
      </div>
    </div>
  );
};

export default ServiceDetails;
