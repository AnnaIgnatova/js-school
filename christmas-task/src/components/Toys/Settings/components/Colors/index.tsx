import { StoreContextConsumer } from "../../../../../StoreContext";
import "./style.css";
import { colors } from "./constants/colors";
import { selectColor } from "./functions/selectColor";

const Colors = () => (
  <StoreContextConsumer>
    {(context) => (
      <div className="all-forms">
        {colors.map((color) => (
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
