import "./style.css";

interface CardInfo {
  num: string;
  name: string;
  count: string;
  year: string;
  shape: string;
  color: string;
  size: string;
  favorite: boolean;
}

const Card = ({
  num,
  name,
  count,
  year,
  shape,
  color,
  size,
  favorite,
}: CardInfo) => (
  <div className="card">
    <div className="card-title">{name}</div>
    <div
      className="card-img"
      style={{
        backgroundImage: `url(/toys/${num}.png)`,
      }}
    ></div>
    <div className="card-info">
      <div>
        <b>Count:</b> {count}
      </div>
      <div>
        <b>Year of purchase:</b> {year}
      </div>
      <div>
        <b>Shape:</b> {shape}
      </div>
      <div>
        <b>Color:</b> {color}
      </div>
      <div>
        <b>Size:</b> {size}
      </div>
    </div>
    {favorite ? <div className="favorite-toy"></div> : ""}
  </div>
);

export default Card;
