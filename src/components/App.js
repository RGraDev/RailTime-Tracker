/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import "../styles/App.css";
import JourneySearchForm from "./JourneySearchForm";

const App = () => {
  return (
    <div className="App">
      Train Punctuality App
      <JourneySearchForm />
    </div>
  );
};

export default App;
