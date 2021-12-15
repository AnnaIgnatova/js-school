import "./Sorting.css";
import { sortingRules } from "./constants/sortingRules";
import { createSortRule } from "./functions/createSortRule";

const Sorting = () => (
  <div className="sorting-select">
    <div className="sorting-select-default">
      {sortingRules[0]}
      <div className="arrow-select"></div>
    </div>
    <div className="select-choose">
      {sortingRules.map((rule) => createSortRule(rule))}
    </div>
  </div>
);

export default Sorting;
