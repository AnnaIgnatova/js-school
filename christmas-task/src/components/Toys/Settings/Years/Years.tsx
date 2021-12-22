import React from "react";
import { Range } from "rc-slider";
import "./Slider.css";
import { StoreContextConsumer } from "../../../../StoreContext";

interface IValues {
  min: number;
  max: number;
  changeYear: (min: number, max: number) => void;
  years: number[];
}

class RangeYearSlider extends React.Component<IValues> {
  state = { sliderValues: [this.props.years[0], this.props.years[1]] };

  handleChange = (sliderValues: number[]) => {
    this.setState({ sliderValues });
    this.props.changeYear(sliderValues[0], sliderValues[1]);
  };

  render() {
    const { sliderValues } = this.state;
    return (
      <div>
        <Range
          min={this.props.min}
          max={this.props.max}
          onChange={this.handleChange}
          defaultValue={sliderValues}
        />
        <div className="count-ranges">
          <div className="year-min">{sliderValues[0]}</div>
          <div className="year-max">{sliderValues[1]} </div>
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
