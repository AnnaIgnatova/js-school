import Card from "./Card/index";
import "./style.css";
import data from "../../../data";
import { StoreContextConsumer } from "../../../StoreContext";

interface Sizes {
  small: boolean;
  medium: boolean;
  big: boolean;
}

interface Colors {
  white: boolean;
  yellow: boolean;
  red: boolean;
  blue: boolean;
  green: boolean;
}

interface Forms {
  ball: false;
  bell: false;
  pine: false;
  snowflake: false;
  figure: false;
}

interface SortingRule {
  byNameAcs: true;
  byNameDesc: false;
  byYearAcs: false;
  byYearDesc: false;
}

const sortingDataByRule = (rule: string) => {
  const sortedArr = data.slice(0);
  switch (rule) {
    case "byNameAcs": {
      return sortedArr.sort((a, b) => {
        const x = a.name.toLowerCase();
        const y = b.name.toLowerCase();
        return x < y ? -1 : x > y ? 1 : 0;
      });
    }
    case "byNameDesc": {
      return sortedArr.sort((a, b) => {
        const x = a.name.toLowerCase();
        const y = b.name.toLowerCase();
        return x > y ? -1 : x < y ? 1 : 0;
      });
    }
    case "byYearAcs": {
      return sortedArr.sort(function (a, b) {
        return +a.year - +b.year;
      });
    }
    case "byYearDesc": {
      return sortedArr.sort(function (a, b) {
        return +b.year - +a.year;
      });
    }
    default:
      return;
  }
};

const allSizes = ["small", "medium", "big"];
const allForms = ["ball", "bell", "pine", "snowflake", "figure"];
const allColors = ["white", "yellow", "red", "blue", "green"];

function createFilterArr(
  filterObj: Sizes | Forms | Colors,
  constArr: string[]
) {
  let arr: string[] = [];
  if (!Object.values(filterObj).filter((val) => val).length) arr = constArr;
  else
    Object.values(filterObj).forEach((value, index) => {
      if (value) arr.push(constArr[index]);
    });
  return arr;
}

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
  const convertSortRule = sortingRule.byYearAcs
    ? "byYearAcs"
    : sortingRule.byYearDesc
    ? "byYearDesc"
    : sortingRule.byNameAcs
    ? "byNameAcs"
    : sortingRule.byNameDesc
    ? "byNameDesc"
    : "";

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

const noToyModal = () => <div className="no-toy">no one toy &#129402;</div>;

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
