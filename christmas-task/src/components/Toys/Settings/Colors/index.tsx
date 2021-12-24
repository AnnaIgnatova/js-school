import { StoreContextConsumer } from "../../../../StoreContext";
import "./style.css";
import { colors } from "./constants/const";

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
              (e.currentTarget as HTMLElement)
                ?.querySelector(".line")
                ?.classList.toggle("hidden");
              context.chooseColor(e.currentTarget.id);
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
