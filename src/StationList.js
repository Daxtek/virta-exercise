import React from "react";
import "./styles.css";
import imgAvailable from "./img/icon_available.svg";
import imgOffline from "./img/icon_offline.svg";

class AvailabilityState extends React.Component {
  render() {
    const textAvailability = this.props.available ? "Available" : "Offline";
    return (
      <div className="availabilityState">
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
      <li className="stationRow">
        <p className="stationName"> {this.props.stationName} </p>
        <AvailabilityState available={this.props.available} />
      </li>
    );
  }
}

export default class StationList extends React.Component {
  render() {
    const stations = this.props.stations.map((station, i) => {
      return (
        <StationRow
          key={station.station_ID}
          stationName={station.name}
          available={station.available}
        />
      );
    });

    return (
      <div className="stationList">
        <h1>Your station</h1>
        <ul>{stations}</ul>
      </div>
    );
  }
}
