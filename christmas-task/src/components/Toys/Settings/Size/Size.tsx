import "./Size.css";
import { toySizes } from "./constants/toySizes";
import { StoreContextConsumer } from "../../../../StoreContext";

const Size = () => (
  <StoreContextConsumer>
    {(context) => (
      <div className="sizes">
        {toySizes.map((size) => (
          <label className="size-item">
            <input
              type="checkbox"
              name={`${size}`}
              id=""
              className="size-checkbox"
              onChange={(e) => {
                context.chooseSize(e.target.name);
              }}
              checked={context.sizes[size]}
            />
            {size}
          </label>
        ))}
      </div>
    )}
  </StoreContextConsumer>
);

export default Size;
