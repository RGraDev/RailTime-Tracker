// Service.js
import React from "react";

const Service = ({ service }) => {
  return (
    <div className="Service">
      <ul>
        <li>
          Departs {service.locationDetail.description}:{" "}
          {service.locationDetail.gbttBookedDeparture} (Platform{" "}
          {service.locationDetail.platform})
        </li>
      </ul>
    </div>
  );
};

export default Service;
