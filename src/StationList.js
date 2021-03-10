import React from "react";
import "./styles.css";
import imgAvailable from "./img/icon_available.svg";
import imgOffline from "./img/icon_offline.svg";
import stationDataJson from "./Front-end_assignment_station_data.json";
import StationData from "./StationData";

/**
 * The div element representing the availabilty state of the station, contain an image and a text
 */
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

/**
 * A Row representing a station in the list of stations as an li element
 */
class StationRow extends React.Component {
  render() {
    return (
      <li
        className="stationRow"
        onClick={() => this.props.onClick(this.props.station)}
      >
        <p className="stationName"> {this.props.station.name} </p>
        <AvailabilityState available={this.props.station.available} />
      </li>
    );
  }
}

/**
 * The component representing the list of station with a title and the list
 */
class StationList extends React.Component {
  render() {
    //Go throught each station to return the row with the associated data
    const stations = stationDataJson.map((station) => {
      return (
        <StationRow
          key={station.station_ID}
          station={station}
          onClick={(station) => this.props.onClick(station)}
        />
      );
    });
    return (
      <div>
        <h1>Your stations </h1>
        <ul>{stations}</ul>
      </div>
    );
  }
}

/**
 * The main component, where we will display either the list of stations or the station details
 */

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      detailView: false, // Indicate if we are view the detail view of a station
      station: null // The sation selected
    };
  }
  /**
   * Handle the click on a station row,
   * define the station selected in the state and the boolean specifying that we are in the detail view
   * @param {Object} station - an Object representing a station's data
   */
  handleClickStation(station) {
    this.setState({
      detailView: true,
      station: station
    });
  }

  /**
   * Handle the click to go back to the station list by changing the state to is initial values
   */
  handleClickBack() {
    this.setState({
      detailView: false,
      station: null
    });
  }

  render() {
    const detailView = this.state.detailView;

    //Return the view in function of the state either the main station list or the data of the station selected
    const view = detailView ? (
      <StationData
        station={this.state.station}
        onClick={() => this.handleClickBack()}
      />
    ) : (
      <StationList
        stations={this.props.stations}
        onClick={(station) => this.handleClickStation(station)}
      />
    );

    return <div className="app">{view}</div>;
  }
}
