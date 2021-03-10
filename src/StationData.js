import React from "react";
import imgArrow from "./img/icon_arrow--left.svg";
import "./styles.css";

/**
 * The component respresenting one data element of a station, it has a label and a value
 */
class Data extends React.Component {
  render() {
    return (
      <div className="data">
        <h4 className="label"> {this.props.label}</h4>
        <p> {this.props.value} </p>
      </div>
    );
  }
}

/**
 * The component respresenting table with all the data from one station
 */
class DataTable extends React.Component {
  render() {
    const stationData = this.props.station;
    // Go throught the station data to display each element
    const datas = Object.entries(stationData).map(([label, value]) => {
      return (
        <Data key={label} label={label} value={value ? value : "no data"} />
      );
    });

    return <div className="dataTable">{datas}</div>;
  }
}

/**
 * The component respresenting button and title
 */
class ActionBar extends React.Component {
  render() {
    return (
      <div className="actionBar">
        <img
          id="buttonBack"
          src={imgArrow}
          alt="Go back"
          onClick={() => this.props.onClick()}
        />
        <h1> {this.props.stationName} </h1>
      </div>
    );
  }
}

/**
 * The component respresenting the station data details, made of a action bar title and the table of data
 */
export default class StationData extends React.Component {
  render() {
    const station = this.props.station;

    return (
      <div className="StationData">
        <ActionBar
          stationName={station.name}
          onClick={() => this.props.onClick()}
        />
        <DataTable station={station} />
      </div>
    );
  }
}
