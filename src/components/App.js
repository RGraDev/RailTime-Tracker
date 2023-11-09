import React from "react";
import "../styles/App.css";
import JourneySearchForm from "./JourneySearchForm";

const App = () => {
  return (
    <div className="App">
      <h1>Train Punctuality App</h1>
      <JourneySearchForm />
    </div>
  );
};

export default App;
