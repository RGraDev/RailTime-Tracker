// Service.js
import React from "react";
import "../styles/Service.css";

const Service = ({ service }) => {
  function formatTime(timeString) {
    const hours = timeString.slice(0, 2);
    const minutes = timeString.slice(2);
    return `${hours}:${minutes}`;
  }

  return (
    <div className="service-container">
      <ul className="service-information">
        <li>
          Departs {service.locationDetail.description}:{" "}
          {formatTime(service.locationDetail.gbttBookedDeparture)} (Platform{" "}
          {service.locationDetail.platform})
        </li>
      </ul>
    </div>
  );
};

export default Service;
