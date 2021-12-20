import { StoreContextConsumer } from "../../../../StoreContext";
import "./style.css";

interface CardInfo {
  info: {
    num: string;
    name: string;
    count: string;
    year: string;
    shape: string;
    color: string;
    size: string;
    favorite: boolean;
  };
}

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
        <div className="card-info">
          <div>
            <b>Count:</b> {props.info.count}
          </div>
          <div>
            <b>Year of purchase:</b> {props.info.year}
          </div>
          <div>
            <b>Shape:</b> {props.info.shape}
          </div>
          <div>
            <b>Color:</b> {props.info.color}
          </div>
          <div>
            <b>Size:</b> {props.info.size}
          </div>
          <div>
            <b>Favorite:</b> {props.info.favorite ? "yes" : "no"}
          </div>
        </div>
        <div
          id={props.info.num}
          className={`favorite-toy ${
            context.savedToys.includes(props.info.num) ? "" : "not-favorite-toy"
          }`}
          onClick={(e) => {
            console.log(context.savedToys);

            if (
              !(e.target as HTMLElement).classList.contains("not-favorite-toy")
            ) {
              context.removeFromSaved((e.target as HTMLElement)?.id);
            } else {
              if (context.savedToys.length + 1 > 20) {
                context.toggleSlotsModal();
              } else context.addToSaved((e.target as HTMLElement)?.id);
            }
          }}
        ></div>
      </div>
    )}
  </StoreContextConsumer>
);

export default Card;
