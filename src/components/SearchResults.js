import React, { useState } from "react";
import Service from "./Service";
import ServiceDetails from "./ServiceDetails";

const SearchResults = ({ services }) => {
  const [expandedIndices, setExpandedIndices] = useState([]);

  const handleExpand = (index) => {
    setExpandedIndices((prevIndices) =>
      prevIndices.includes(index)
        ? prevIndices.filter((i) => i !== index)
        : [...prevIndices, index],
    );
  };

  if (!services) {
    return <p>No results found.</p>;
  }

  return (
    <div className="SearchResults">
      <h2>Search Results</h2>
      {services.map((service, index) => (
        <div key={service.serviceUid}>
          <Service service={service} />
          <button type="button" onClick={() => handleExpand(index)}>
            {expandedIndices.includes(index)
              ? "Hide Details"
              : "View more details about this service"}
          </button>
          {expandedIndices.includes(index) && (
            <ServiceDetails service={service} />
          )}
        </div>
      ))}
    </div>
  );
};

export default SearchResults;
