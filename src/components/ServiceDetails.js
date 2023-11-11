import React from "react";

const ServiceDetails = ({ service }) => {
  return (
    <div className="ServiceDetails">
      <ul>
        <li>{service.serviceUid}</li>
        <li>Service operated by {service.atocName}</li>
      </ul>
    </div>
  );
};

export default ServiceDetails;
