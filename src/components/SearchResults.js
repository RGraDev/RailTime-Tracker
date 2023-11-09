// SearchResults.js
import React from "react";
import Service from "./Service"; // Import the Service component

const SearchResults = ({ services }) => {
  return (
    <div className="SearchResults">
      <h2>Search Results</h2>
      {services.map((service) => (
        <Service key={service.serviceUid} service={service} />
      ))}
    </div>
  );
};

export default SearchResults;
