import React from "react";
import "./styles.css";
import imgAvailable from "./img/icon_available.svg";
import imgOffline from "./img/icon_offline.svg";

class AvailabilityState extends React.Component {
  render() {
    const textAvailability = this.props.available ? "Available" : "Offline";
    return (
      <div class="availabilityState">
        <img
          src={this.props.available ? imgAvailable : imgOffline}
          alt={textAvailability}
        />
        <p> {textAvailability} </p>
      </div>
    );
  }
}

class StationRow extends React.Component {
  render() {
    return (
      <li class="stationRow">
        <p class="stationName"> {this.props.stationName} </p>
        <AvailabilityState available={this.props.available} />
      </li>
    );
  }
}

class StationTable extends React.Component {
  render() {
    return (
      <div className="StationTable">
        <h1>Your station</h1>
        <ul>
          <StationRow stationName="Test1" available={true} />
          <StationRow stationName="Test2" available={false} />
          <StationRow stationName="Test3" available={true} />
        </ul>
      </div>
    );
  }
}

export default function App() {
  return (
    <div className="App">
      <StationTable />
    </div>
  );
}
