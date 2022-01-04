import { StoreContextConsumer } from "../../../../../StoreContext";
import "./style.css";
import { selectColor } from "./functions/selectColor";

const Colors = () => (
  <StoreContextConsumer>
    {(context) => (
      <div className="all-forms">
        {["white", "yellow", "red", "blue", "green"].map((color) => (
          <div
            className="color"
            id={color}
            style={{ backgroundColor: color }}
            onClick={(e) => {
              selectColor(e, context.chooseColor);
            }}
          >
            <div
              className={`line ${context.colors[color] ? "" : "hidden"}`}
            ></div>
          </div>
        ))}
      </div>
    )}
  </StoreContextConsumer>
);

export default Colors;
