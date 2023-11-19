import React, { useState } from "react";
import Service from "./Service";
import ServiceDetails from "./ServiceDetails";
import "../styles/SearchResults.css";

const SearchResults = ({ services, fields }) => {
  const [expandedIndices, setExpandedIndices] = useState([]);

  const handleExpand = (index) => {
    setExpandedIndices((prevIndices) =>
      prevIndices.includes(index)
        ? prevIndices.filter((i) => i !== index)
        : [...prevIndices, index],
    );
  };

  if (services.length === 0) {
    return <p>No results found.</p>;
  }

  return (
    <div className="search-results-container">
      <h2>Good news! We found the following journies for you...</h2>
      {services.map((service, index) => (
        <div key={service.serviceUid} className="result-item">
          <Service service={service} />
          <button type="button" onClick={() => handleExpand(index)}>
            {expandedIndices.includes(index)
              ? "Hide Details"
              : "View more details about this service"}
          </button>
          {expandedIndices.includes(index) && (
            <ServiceDetails service={service} fields={fields} />
          )}
        </div>
      ))}
    </div>
  );
};

export default SearchResults;
