import "./ExampleCount.css";
import React from "react";
import { Range } from "rc-slider";
import { StoreContextConsumer } from "../../../../StoreContext";

interface IValues {
  min: number;
  max: number;
  changeCount: (min: number, max: number) => void;
}

class RangeCountSlider extends React.Component<IValues> {
  state = { sliderValues: [this.props.min, this.props.max] };

  handleChange = (sliderValues: number[]) => {
    this.setState({ sliderValues });
    this.props.changeCount(sliderValues[0], sliderValues[1]);
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
          <div className="range-min">{sliderValues[0]}</div>
          <div className="range-max">{sliderValues[1]}</div>
        </div>
      </div>
    );
  }
}

const ExampleCount = () => (
  <StoreContextConsumer>
    {(context) => (
      <>
        <RangeCountSlider min={1} max={12} changeCount={context.chooseCount} />
      </>
    )}
  </StoreContextConsumer>
);

export default ExampleCount;
