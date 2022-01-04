import { StoreContextConsumer } from "../../../../StoreContext";
import "./style.css";
import { CardInfo } from "./interfaces/CardInfo";
import { toggleFavorite } from "./functions/toggleFavorite";
import CardFilters from "./components/CardFilters";

const Card = (props: CardInfo) => (
  <StoreContextConsumer>
    {(context) => (
      <div className="card">
        <div className="card-title">{props.info.name}</div>
        <div
          className="card-img"
          style={{
            backgroundImage: `url(/toys/${props.info.num}.png)`,
          }}
        ></div>
        <CardFilters info={props.info} />
        <div
          id={props.info.num}
          className={`favorite-toy ${
            context.savedToys.includes(props.info.num) ? "" : "not-favorite-toy"
          }`}
          onClick={(e) => {
            toggleFavorite(
              e,
              context.removeFromSaved,
              context.toggleSlotsModal,
              context.addToSaved,
              context.savedToys
            );
          }}
        ></div>
      </div>
    )}
  </StoreContextConsumer>
);

export default Card;
