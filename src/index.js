import { StrictMode } from "react";
import ReactDOM from "react-dom";

import StationList from "./StationList";
import StationData from "./StationData";
import stationDataJson from "./Front-end_assignment_station_data.json";

console.log("data", stationDataJson);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <div className="App">
      <StationList stations={stationDataJson} />
      {/*<StationData />*/}
    </div>
  </StrictMode>,
  rootElement
);
