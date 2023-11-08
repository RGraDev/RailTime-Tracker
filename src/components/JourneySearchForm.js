import React, { useState } from "react";
import axios from "axios";

const JourneySearchForm = () => {
  const initialState = {
    fields: {
      origin_station: "",
      destination_station: "",
      time: "",
    },
  };

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

  const [fields, setFields] = useState(initialState.fields);

  const handleSearchJournies = (event) => {
    event.preventDefault();
    const currentDate = new Date();
    const year = currentDate.getFullYear;
    const month = currentDate.getMonth;
    const day = currentDate.getDate;

    const origin = fields.origin_station;
    const destination = fields.destination_station;

    const urlString = `api.rtt.io/api/v1/json/search/${origin}/to/${destination}/${year}/${month}/${day}`;
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
            Liverpool
          </option>
          <option key="MAN" value="MAN">
            Manchester
          </option>
        </select>
        <select
          id="destination_station"
          name="destination_station"
          value={fields.destination_station}
          onChange={handleFieldChange}
        >
          <option key="LIV" value="LIV">
            Liverpool
          </option>
          <option key="MAN" value="MAN">
            Manchester
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
    </div>
  );
};

export default JourneySearchForm;
