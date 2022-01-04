import { SortingRule } from "../interfaces/SortingRule";

export const createSortingRule = (sortingRule: SortingRule) =>
  sortingRule.byYearAcs
    ? "byYearAcs"
    : sortingRule.byYearDesc
    ? "byYearDesc"
    : sortingRule.byNameAcs
    ? "byNameAcs"
    : sortingRule.byNameDesc
    ? "byNameDesc"
    : "";
