import React from "react";
import { Range } from "rc-slider";
import "./style.css";
import { StoreContextConsumer } from "../../../../StoreContext";

interface IValues {
  min: number;
  max: number;
  changeYear: (min: number, max: number) => void;
  years: number[];
}

class RangeYearSlider extends React.Component<IValues> {
  handleChange = (sliderValues: number[]) => {
    this.props.changeYear(sliderValues[0], sliderValues[1]);
  };

  render() {
    return (
      <div>
        <Range
          min={this.props.min}
          max={this.props.max}
          onChange={this.handleChange}
          value={[this.props.years[0], this.props.years[1]]}
        />
        <div className="count-ranges">
          <div className="year-min">{this.props.years[0]}</div>
          <div className="year-max">{this.props.years[1]} </div>
        </div>
      </div>
    );
  }
}

const Years = () => (
  <StoreContextConsumer>
    {(context) => (
      <>
        <RangeYearSlider
          min={1940}
          max={2020}
          changeYear={context.chooseYear}
          years={context.years}
        />
      </>
    )}
  </StoreContextConsumer>
);

export default Years;
