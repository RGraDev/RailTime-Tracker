import { React, useState } from "react";
import "../styles/App.css";
import JourneySearchForm from "./JourneySearchForm";
import SearchResults from "./SearchResults";
import ServiceDetails from "./ServiceDetails";

const App = () => {
  const [fields, setFields] = useState({
    origin_station: "MAN",
    destination_station: "LIV",
    time: "13:00",
  });

  return (
    <div className="App">
      <h1>Train Punctuality App</h1>
      <JourneySearchForm fields={fields} setFields={setFields} />
      <ServiceDetails fields={fields} />
    </div>
  );
};

export default App;
