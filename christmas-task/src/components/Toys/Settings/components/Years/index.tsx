import { StoreContextConsumer } from "../../../../../StoreContext";
import RangeSlider from "../RangeSlider";

const Years = () => (
  <StoreContextConsumer>
    {(context) => (
      <>
        <RangeSlider
          min={1940}
          max={2020}
          changeValues={context.chooseYear}
          values={context.years}
        />
      </>
    )}
  </StoreContextConsumer>
);

export default Years;
