import { CardInfo } from "../interfaces/CardInfo";
import { filters } from "../constants/filters";

const CardFilters = (props: CardInfo): JSX.Element => (
  <div className="card-info">
    {Object.values(props.info)
      .slice(2)
      .map((prop, index) => (
        <div>
          <b>{filters[index]}</b>
          {!(index === filters.length - 1) ? prop : !prop ? "no" : "yes"}
        </div>
      ))}
  </div>
);
export default CardFilters;
