/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */
import { React, useState } from "react";
import "../styles/App.css";
import JourneySearchForm from "./JourneySearchForm";
import trainImage from "../images/image.jpg";
import ServiceDetails from "./ServiceDetails";

const App = () => {
  const [fields, setFields] = useState({
    origin_station: "MAN",
    destination_station: "LIV",
    time: "13:00",
  });

  return (
    <div className="App">
      <h2>Train Punctuality App</h2>
      <div>
        <h3>Plan Your Journey</h3>

        <article>
          <section id="blog-text">
            <p>
              This train punctuality app is a web application designed to
              provide real-time information about the punctuality and status of
              train services. The app typically utilizes data from railway
              systems and networks to offer users up-to-date information on
              train schedules, delays, and any disruptions in service.
            </p>
          </section>
          <section id="train-logo">
            <img src={trainImage} alt="train-logo" />
          </section>
        </article>
      </div>
      <JourneySearchForm />
      <h1>Train Punctuality App</h1>
      <JourneySearchForm fields={fields} setFields={setFields} />
      <ServiceDetails fields={fields} />
    </div>
  );
};

export default App;
