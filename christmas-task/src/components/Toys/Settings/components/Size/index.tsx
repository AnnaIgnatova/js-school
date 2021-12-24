import "./style.css";
import { toySizes } from "./constants/toySizes";
import { StoreContextConsumer } from "../../../../../StoreContext";

const Size = () => (
  <StoreContextConsumer>
    {(context) => (
      <div className="sizes-block">
        {toySizes.map((size) => (
          <label className="size-item">
            <input
              type="checkbox"
              name={`${size}`}
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
