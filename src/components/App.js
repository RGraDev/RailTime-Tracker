import { React, useState } from "react";
import "../styles/App.css";
import JourneySearchForm from "./JourneySearchForm";
import SearchResults from "./SearchResults";
import Landing from "./Landing";
import Error from "./Error";

const App = () => {
  const [fields, setFields] = useState({
    origin_station: "MAN",
    destination_station: "LIV",
    time: "13:00",
  });

  const [searchResults, setSearchResults] = useState([]);
  const [initialLoad, setInitialLoad] = useState(true);

  const handleSearchResults = (results) => {
    setSearchResults(results || []);
    setInitialLoad(false);
  };

  let contentComponent;

  if (initialLoad) {
    contentComponent = <Landing />;
  } else if (searchResults.length === 0) {
    contentComponent = <Error />;
  } else {
    contentComponent = (
      <SearchResults services={searchResults} fields={fields} />
    );
  }

  return (
    <div className="App">
      <div className="header">
        <h1>RailTime Tracker</h1>
        <JourneySearchForm
          fields={fields}
          setFields={setFields}
          setSearchResults={handleSearchResults}
        />
      </div>
      {contentComponent}
    </div>
  );
};

export default App;
