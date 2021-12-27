import { StoreContextConsumer } from "../../../../StoreContext";
import "./style.css";

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
                if ((e.currentTarget as HTMLElement).id === "none")
                  context.setGareland(false);
                if (
                  (e.currentTarget as HTMLElement).id !== "none" &&
                  !context.switchGareland
                )
                  context.setGareland(true);
                context.chooseGareland(e.currentTarget.id);
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
