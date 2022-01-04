import "./style.css";
import { StoreContextConsumer } from "../../../../../StoreContext";

const Size = () => (
  <StoreContextConsumer>
    {(context) => (
      <div className="sizes-block">
        {["small", "medium", "big"].map((size) => (
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
