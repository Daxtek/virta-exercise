import React, { useState, useEffect } from "react";
import "./styles.css";
import imgAvailable from "./img/icon_available.svg";
import imgOffline from "./img/icon_offline.svg";
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
    const test = this.props.stations;
    console.log("test", test);

    //Go throught each station to return the row with the associated data
    const stations = this.props.stations.map((station) => {
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

export default function App() {
  const [jsonData, setJsonData] = useState(); // The station data that we need to fetch
  const [detailView, setDetailView] = useState(false); // Indicate if we are view the detail view of a station
  const [station, setStation] = useState(); // The sation selected
  const [loading, setLoading] = useState(true); // Indicate if we are loading the data
  const [error, setError] = useState(false); // Indicate if there was an error
  /**
   * Handle the click on a station row,
   * define the station selected in the state and the boolean specifying that we are in the detail view
   * @param {Object} station - an Object representing a station's data
   */
  const handleClickStation = (station) => {
    setDetailView(true);
    setStation(station);
  };

  /**
   * Handle the click to go back to the station list by changing the state to is initial values
   */
  const handleClickBack = () => {
    setDetailView(false);
    setStation(null);
  };

  /**
   * Use the fetch API to retrive some JSON file in order to access the JSON data
   * Can be use to fecth data from an API later on
   * @param {string} url - the url of the file to fetch
   */
  const fetchJson = async (url) => {
    try {
      const res = await fetch(url);
      const answer = await res.json();
      setJsonData(answer);
      setLoading(false);
    } catch (err) {
      console.log("err", err);
      setError(true);
    }
  };

  useEffect(() => {
    fetchJson("./Front-end_assignment_station_data.json");
  }, []);

  //Return the view in function of the state either the main station list or the data of the station selected
  const view = detailView ? (
    <StationData station={station} onClick={() => handleClickBack()} />
  ) : (
    <StationList
      stations={jsonData}
      onClick={(station) => handleClickStation(station)}
    />
  );

  if (loading) return "Loading...";
  if (error) return "Error!";

  return <div className="app">{view}</div>;
}
