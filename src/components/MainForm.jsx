import React, { Component } from "react";
import FormComponent from "./FormComponent";
import ListSV from "./ListSV";

export default class MainForm extends Component {
  render() {
    return (
      <div className="container">
        <FormComponent />
        <ListSV />
      </div>
    );
  }
}
