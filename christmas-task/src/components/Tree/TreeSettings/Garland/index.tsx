import { StoreContextConsumer } from "../../../../StoreContext";
import "./style.css";
import { changeGareland } from "./functions/changeGareland";

const Garland = () => (
  <StoreContextConsumer>
    {(context) => (
      <div className="garland-container">
        {["rainbow", "flash-1", "flash-2", "flash-3", "flash-4", "none"].map(
          (flash, index) => (
            <div
              className={`garland garland-${index + 1}`}
              id={flash}
              onClick={(e) => {
                changeGareland(
                  e,
                  context.setGareland,
                  context.chooseGareland,
                  context.switchGareland
                );
              }}
            >
              <div className="active-gareland hidden"></div>
            </div>
          )
        )}
      </div>
    )}
  </StoreContextConsumer>
);

export default Garland;
