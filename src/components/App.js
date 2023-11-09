/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="App ">
      <p>
        This App assists in creating an effective travel itinerary by providing
        information on the punctuality of train services.
      </p>

      <Router>
        <Routes />
      </Router>
    </div>
  );
};

export default App;
