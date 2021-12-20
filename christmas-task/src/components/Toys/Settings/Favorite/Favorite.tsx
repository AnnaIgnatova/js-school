import { StoreContextConsumer } from "../../../../StoreContext";
import "./Favorite.css";

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
            context.toggleAllFavorite();
          }}
        />
        Only favorite
      </label>
    )}
  </StoreContextConsumer>
);

export default Favorite;
