import "./style.css";
import React from "react";
import { Range } from "rc-slider";
import { StoreContextConsumer } from "../../../../StoreContext";

interface IValues {
  min: number;
  max: number;
  count: number[];
  changeCount: (min: number, max: number) => void;
}

class RangeCountSlider extends React.Component<IValues> {
  handleChange = (sliderValues: number[]) => {
    this.props.changeCount(sliderValues[0], sliderValues[1]);
  };

  render() {
    return (
      <div>
        <Range
          min={this.props.min}
          max={this.props.max}
          onChange={this.handleChange}
          value={[this.props.count[0], this.props.count[1]]}
        />
        <div className="count-ranges">
          <div className="range-min">{this.props.count[0]}</div>
          <div className="range-max">{this.props.count[1]}</div>
        </div>
      </div>
    );
  }
}

const ExampleCount = () => (
  <StoreContextConsumer>
    {(context) => (
      <>
        <RangeCountSlider
          min={1}
          max={12}
          changeCount={context.chooseCount}
          count={context.count}
        />
      </>
    )}
  </StoreContextConsumer>
);

export default ExampleCount;
