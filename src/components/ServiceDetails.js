/* eslint-disable no-console */
import React, { useEffect, useState } from "react";
import axios from "axios";

const ServiceDetails = ({ fields, service }) => {
  const [details, setDetails] = useState(null);
  const [latenessForDestination, setLatenessForDestination] = useState(null);

  useEffect(() => {
    const fetchServiceDetails = () => {
      if (!service || !service.serviceUid) {
        // If 'service' or 'service.serviceUid' is null or undefined, do not proceed with the API call
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

          const destinationDescription = fields.destination_station;
          const destinationLocation = response.data.locations.find(
            (location) => location.crs === destinationDescription,
          );

          if (destinationLocation) {
            setLatenessForDestination(
              destinationLocation.realtimeGbttArrivalLateness,
            );
          }
        })
        .catch((error) => {
          console.error(error);
        });
    };

    fetchServiceDetails();
  }, [fields.destination_station, service]);

  if (!details) {
    return null;
  }

  return (
    <div className="ServiceDetails">
      <ul>
        <li>{details.serviceUid}</li>
        <li>Service operated by {details.atocName}</li>
        <li>
          {latenessForDestination !== undefined
            ? `Train arrived ${latenessForDestination} minutes late`
            : `On Time`}
        </li>
      </ul>
    </div>
  );
};

export default ServiceDetails;
