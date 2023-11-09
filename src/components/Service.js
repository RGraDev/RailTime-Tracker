// Service.js
import React from "react";

const Service = ({ service }) => {
  return (
    <div className="Service">
      <ul>
        <li>{service.serviceUid}</li>
        <li>{service.atocName}</li>
        <li>
          Departs {service.locationDetail.description}:{" "}
          {service.locationDetail.gbttBookedDeparture} (Platform{" "}
          {service.locationDetail.platform})
        </li>
        <li>
          Arrives at {service.locationDetail.destination[0].description}:{" "}
          {service.locationDetail.destination[0].publicTime}
        </li>
      </ul>
    </div>
  );
};

export default Service;
