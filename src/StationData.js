import React from "react";
import imgArrow from "./img/icon_arrow--left.svg";
import "./styles.css";

class Data extends React.Component {
  render() {
    return (
      <div class="data">
        <h4 class="label"> {this.props.label}</h4>
        <p> {this.props.value} </p>
      </div>
    );
  }
}

class DataTable extends React.Component {
  render() {
    return (
      <div class="dataTable">
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
      <div class="actionBar">
        <img id="buttonBack" src={imgArrow} />
        <h1> {this.props.stationName} </h1>
      </div>
    );
  }
}

export default function StationData() {
  return (
    <div className="StationData">
      <ActionBar stationName={"Station Name"} />
      <DataTable />
    </div>
  );
}
