/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-console */
import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/ServiceDetails.css";

const ServiceDetails = ({ fields, service }) => {
  const [details, setDetails] = useState(null);

  // To format time values returned from the API
  const formatTime = (timeString) => {
    const hours = timeString.slice(0, 2);
    const minutes = timeString.slice(2);
    return `${hours}:${minutes}`;
  };

  useEffect(() => {
    const fetchServiceDetails = () => {
      if (!service || !service.serviceUid) {
        console.error("Service or serviceUid is missing");
        return;
      }

      const currentDate = new Date();
      const year = currentDate.getFullYear();
      const month = currentDate.getMonth() + 1;
      const day = currentDate.getDate().toString().padStart(2, "0");

      const date = `${year}/${month}/${day}`;
      const id = service.serviceUid;

      const pathParams = `${id}/${date}`;

      axios
        .get(
          `http://localhost:3001/api/external-data/get-details?pathParams=${pathParams}`,
        )
        .then((response) => {
          setDetails(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    };

    fetchServiceDetails();
  }, [service]);

  if (!details) {
    return null;
  }

  const destinationDescription = fields.destination_station;
  const destinationLocation = details.locations.find(
    (location) => location.crs === destinationDescription,
  );

  const {
    realtimeArrival,
    realtimeGbttArrivalLateness,
    realtimeArrivalActual,
    gbttBookedArrival,
  } = destinationLocation;

  let status;

  if (realtimeArrivalActual === false) {
    status = `Has not arrived yet`;
  } else if (realtimeArrival) {
    if (realtimeGbttArrivalLateness !== undefined) {
      const lateness = realtimeGbttArrivalLateness;
      const arrivalTime = formatTime(realtimeArrival);

      if (lateness === 0) {
        status = "On Time";
      } else {
        const latenessText =
          Math.abs(lateness) === 1
            ? `${Math.abs(lateness)} minute`
            : `${Math.abs(lateness)} minutes`;

        if (lateness < 0) {
          status = `Actual Arrival: ${arrivalTime} (${latenessText} early)`;
        } else {
          status = `Actual Arrival: ${arrivalTime} (${latenessText} late)`;
        }
      }
    } else {
      status = "On Time";
    }
  } else {
    status = "I'm not quite sure what happened to this train!";
  }

  return (
    <div className="service-details-container">
      <ul className="service-details">
        <li>{details.serviceUid}</li>
        <li>Service operated by {details.atocName}</li>
        <li>Timetabled Arrival: {formatTime(gbttBookedArrival)}</li>
        <li>{status}</li>
      </ul>
    </div>
  );
};

export default ServiceDetails;
