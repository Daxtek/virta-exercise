import { StrictMode } from "react";
import ReactDOM from "react-dom";

import StationTable from "./StationTable";
import StationData from "./StationData";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <div className="App">
      <StationTable />
      <StationData />
    </div>
  </StrictMode>,
  rootElement
);
