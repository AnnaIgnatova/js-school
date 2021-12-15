import Card from "./Card";
import "./Cards.css";
import data from "../../../data";

const Cards = () => (
  <div className="cards">
    {data.map(({ num, name, count, year, shape, color, size, favorite }) => (
      <Card
        num={num}
        name={name}
        count={count}
        year={year}
        shape={shape}
        color={color}
        size={size}
        favorite={favorite}
      />
    ))}
  </div>
);

export default Cards;
