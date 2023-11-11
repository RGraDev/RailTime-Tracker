/* eslint-disable no-console */
import React, { useState } from "react";
import axios from "axios";
import SearchResults from "./SearchResults";

const JourneySearchForm = ({ fields, setFields }) => {
  const generateTimeOptions = () => {
    const options = [];
    for (let hour = 0; hour < 24; hour += 1) {
      for (let minute = 0; minute < 60; minute += 60) {
        const time = `${String(hour).padStart(2, "0")}:${String(
          minute,
        ).padStart(2, "0")}`;
        options.push(time);
      }
    }
    return options;
  };

  const timeOptions = generateTimeOptions();

  const [searchResults, setSearchResults] = useState([]);

  const handleSearchJournies = (event) => {
    event.preventDefault();
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1;
    const day = currentDate.getDate().toString().padStart(2, "0");

    const origin = fields.origin_station;
    const destination = fields.destination_station;

    const urlString = `${origin}/to/${destination}/${year}/${month}/${day}/${fields.time.replace(
      ":",
      "",
    )}`;

    axios
      .get(
        `http://localhost:3001/api/external-data/get-services?pathParams=${urlString}`,
      )
      .then((response) => {
        setSearchResults(response.data.services);
      })
      .catch((error) => console.log(error));
  };

  const handleFieldChange = (event) => {
    setFields({ ...fields, [event.target.name]: event.target.value });
  };

  return (
    <div className="SearchJournies">
      <form onSubmit={handleSearchJournies}>
        <select
          id="origin_station"
          name="origin_station"
          value={fields.origin_station}
          onChange={handleFieldChange}
        >
          <option key="LIV" value="LIV">
            Liverpool Lime Street
          </option>
          <option key="MAN" value="MAN">
            Manchester Piccadilly
          </option>
        </select>
        <select
          id="destination_station"
          name="destination_station"
          value={fields.destination_station}
          onChange={handleFieldChange}
        >
          <option key="LIV" value="LIV">
            Liverpool Lime Street
          </option>
          <option key="MAN" value="MAN">
            Manchester Piccadilly
          </option>
        </select>
        <select
          id="time"
          name="time"
          value={fields.time}
          onChange={handleFieldChange}
        >
          {timeOptions.map((time) => (
            <option key={time} value={time}>
              {time}
            </option>
          ))}
        </select>
        <button type="submit" onClick={handleSearchJournies}>
          Search
        </button>
      </form>
      {searchResults.length > 0 && <SearchResults services={searchResults} fields={fields} />}
    </div>
  );
};

export default JourneySearchForm;