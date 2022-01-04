import { StoreContextConsumer } from "../../../../StoreContext";
import "./style.css";
import { changeBg } from "./functions/changeBg";

const Backgrounds = () => (
  <StoreContextConsumer>
    {(context) => (
      <div className="bgs-container">
        {["bg-1", "bg-2", "bg-3", "bg-4", "bg-5", "bg-6", "bg-7", "bg-8"].map(
          (bg) => (
            <div
              className={`bg-item ${bg}`}
              id={bg}
              onClick={(e) => {
                changeBg(e, context.chooseBG);
              }}
            ></div>
          )
        )}
      </div>
    )}
  </StoreContextConsumer>
);

export default Backgrounds;
