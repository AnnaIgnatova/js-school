import Card from "./Card";
import "./Cards.css";
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

const renderCards = (
  checked: boolean,
  sizes: Sizes,
  colors: Colors,
  forms: Forms,
  sortingRule: SortingRule,
  favorite: boolean
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

  const convertedSizes = [
    sizes.small ? "small" : sizes.small,
    sizes.medium ? "medium" : sizes.medium,
    sizes.big ? "big" : sizes.big,
  ];
  const convertedColors = [
    colors.white ? "white" : colors.white,
    colors.yellow ? "yellow" : colors.yellow,
    colors.red ? "red" : colors.red,
    colors.blue ? "blue" : colors.blue,
    colors.green ? "green" : colors.green,
  ];

  const convertedForms = [
    forms.ball ? "ball" : forms.ball,
    forms.bell ? "bell" : forms.bell,
    forms.pine ? "pine" : forms.pine,
    forms.snowflake ? "snowflake" : forms.snowflake,
    forms.figure ? "figure" : forms.figure,
  ];

  if (checked)
    return sortingDataByRule(convertSortRule)?.map((info) => (
      <Card info={info} />
    ));
  if (favorite) {
    return sortingDataByRule(convertSortRule)?.map((info) =>
      info.favorite ? <Card info={info} /> : ""
    );
  } else {
    return sortingDataByRule(convertSortRule)?.map((info) => {
      if (
        convertedSizes.includes(info.size) ||
        convertedColors.includes(info.color) ||
        convertedForms.includes(info.shape)
      )
        return <Card info={info} />;
    });
  }
};

const Cards = () => (
  <StoreContextConsumer>
    {(context) => (
      <div className="cards">
        {renderCards(
          context.allChecked,
          context.sizes,
          context.colors,
          context.forms,
          context.sortingRule,
          context.allFavorite
        )}
      </div>
    )}
  </StoreContextConsumer>
);

export default Cards;
