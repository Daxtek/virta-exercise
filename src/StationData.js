import React from "react";
import imgArrow from "./img/icon_arrow--left.svg";
import "./styles.css";

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

class DataTable extends React.Component {
  render() {
    return (
      <div className="dataTable">
        <Data label={"Label"} value={"Value"} />
        <Data label={"Label"} value={"Value"} />
        <Data label={"Label"} value={"Value"} />
        <Data label={"Label"} value={"Value"} />
        <Data label={"Label"} value={"Value"} />
        <Data label={"Label"} value={"Value"} />
        <Data label={"Label"} value={"Value"} />
        <Data label={"Label"} value={"Value"} />
        <Data label={"Label"} value={"Value"} />
      </div>
    );
  }
}

class ActionBar extends React.Component {
  render() {
    return (
      <div className="actionBar" onClick={() => this.props.onClick()}>
        <img id="buttonBack" src={imgArrow} alt="Go back" />
        <h1> {this.props.stationName} </h1>
      </div>
    );
  }
}

export default class StationData extends React.Component {
  render() {
    const station = this.props.station;

    console.log(station);
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
