import React from "react";
import IValues from "./interfaces/IValues";
import { Range } from "rc-slider";
import "./style.css";

class RangeSlider extends React.Component<IValues> {
  handleChange = (sliderValues: number[]) => {
    this.props.changeValues(sliderValues[0], sliderValues[1]);
  };

  render() {
    return (
      <div>
        <Range
          min={this.props.min}
          max={this.props.max}
          onChange={this.handleChange}
          value={[this.props.values[0], this.props.values[1]]}
        />
        <div className="count-ranges">
          <div>{this.props.values[0]}</div>
          <div>{this.props.values[1]} </div>
        </div>
      </div>
    );
  }
}

export default RangeSlider;
