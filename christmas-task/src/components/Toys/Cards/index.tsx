import "./style.css";
import { StoreContextConsumer } from "../../../StoreContext";
import { renderCards } from "./functions/renderCards";
import { noToyModal } from "../../Modal/noToy";

const Cards = () => (
  <StoreContextConsumer>
    {(context) => {
      const cards = renderCards(
        context.sizes,
        context.colors,
        context.forms,
        context.sortingRule,
        context.favorite,
        context.years,
        context.count,
        context.searchText
      );
      return (
        <div className="cards">
          {cards?.filter((card) => card).length === 0 ? noToyModal() : cards}
        </div>
      );
    }}
  </StoreContextConsumer>
);

export default Cards;
