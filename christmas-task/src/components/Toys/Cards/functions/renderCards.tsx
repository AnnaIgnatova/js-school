import { sortingDataByRule } from "./sortByRule";
import { Sizes } from "../interfaces/Sizes";
import { Colors } from "../interfaces/Colors";
import { Forms } from "../interfaces/Forms";
import { SortingRule } from "../interfaces/SortingRule";
import { createFilterArr } from "./createFilterArr";
import { allSizes, allForms, allColors } from "../constants/filters";
import Card from "../Card/index";
import { createSortingRule } from "./createSortingRule";

const renderCards = (
  sizes: Sizes,
  colors: Colors,
  forms: Forms,
  sortingRule: SortingRule,
  favorite: boolean,
  years: number[],
  count: number[],
  searchText: string
) => {
  const convertSortRule = createSortingRule(sortingRule);
  const sizesArr = createFilterArr(sizes, allSizes);
  const formsArr = createFilterArr(forms, allForms);
  const colorsArr = createFilterArr(colors, allColors);
  const favoriteArr = favorite ? [true] : [true, false];

  return sortingDataByRule(convertSortRule)?.map((info) => {
    if (
      sizesArr.includes(info.size) &&
      formsArr.includes(info.shape) &&
      colorsArr.includes(info.color) &&
      favoriteArr.includes(info.favorite) &&
      Number(info.year) >= years[0] &&
      Number(info.year) <= years[1] &&
      Number(info.count) >= count[0] &&
      Number(info.count) <= count[1] &&
      info.name.toLowerCase().includes(searchText.toLowerCase())
    )
      return <Card info={info} />;
  });
};

export { renderCards };
