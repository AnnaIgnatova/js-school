import "./style.css";
import { StoreContextConsumer } from "../../../../../StoreContext";
import RangeSlider from "../RangeSlider";

const ExampleCount = () => (
  <StoreContextConsumer>
    {(context) => (
      <>
        <RangeSlider
          min={1}
          max={12}
          changeValues={context.chooseCount}
          values={context.count}
        />
      </>
    )}
  </StoreContextConsumer>
);

export default ExampleCount;
