import { React, useState } from "react";
import "../styles/App.css";
import JourneySearchForm from "./JourneySearchForm";
import SearchResults from "./SearchResults";
import Landing from "./Landing";

const App = () => {
  const [fields, setFields] = useState({
    origin_station: "MAN",
    destination_station: "LIV",
    time: "13:00",
  });

  const [searchResults, setSearchResults] = useState([]);

  return (
    <div className="App">
      <div className="header">
        <h1>RailTime Tracker</h1>
        <JourneySearchForm
          fields={fields}
          setFields={setFields}
          setSearchResults={setSearchResults}
        />
      </div>
      <Landing />
      {searchResults && searchResults.length > 0 && (
        <SearchResults services={searchResults} fields={fields} />
      )}
    </div>
  );
};

export default App;
