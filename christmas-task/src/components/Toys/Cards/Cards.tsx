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

const renderCards = (
  checked: boolean,
  sizes: Sizes,
  colors: Colors,
  forms: Forms
) => {
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

  if (checked) return data.map((info) => <Card info={info} />);
  else {
    return data.map((info) => {
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
          context.forms
        )}
      </div>
    )}
  </StoreContextConsumer>
);

export default Cards;
