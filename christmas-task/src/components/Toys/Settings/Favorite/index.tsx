import { StoreContextConsumer } from "../../../../StoreContext";
import "./style.css";

const Favorite = () => (
  <StoreContextConsumer>
    {(context) => (
      <label className="favorite">
        <input
          type="checkbox"
          name=""
          id=""
          className="favorite-checkbox"
          onChange={() => {
            context.toggleFavorite();
          }}
          checked={context.favorite}
        />
        Only favorite
      </label>
    )}
  </StoreContextConsumer>
);

export default Favorite;
