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
    </div>
    {props.info.favorite ? <div className="favorite-toy"></div> : ""}
  </div>
);

export default Card;
