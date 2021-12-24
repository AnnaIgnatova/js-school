import "./style.css";
import { sortingRules } from "./constants/sortingRules";
import { StoreContextConsumer } from "../../../../../StoreContext";
import { sortingIdArr } from "./constants/sortingId";
import { selectSortingRule } from "./functions/selectSortingRule";
import { openSortingSelect } from "./functions/openSortingRules";

const Sorting = () => (
  <StoreContextConsumer>
    {(context) => (
      <div>
        <div className="sorting-select-default" onClick={openSortingSelect}>
          <span className="default-text"> {sortingRules[0]}</span>
          <div className="arrow-select"></div>
        </div>
        <div className="select-choose hidden">
          {sortingRules.map((rule, index) => (
            <div
              className="select-item"
              id={sortingIdArr[index]}
              onClick={(e) =>
                selectSortingRule(e, context.chooseSortingRule, index)
              }
            >
              {rule}
            </div>
          ))}
        </div>
      </div>
    )}
  </StoreContextConsumer>
);

export default Sorting;
