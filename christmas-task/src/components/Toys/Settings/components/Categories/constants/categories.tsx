import Forms from "../../Forms";
import ExampleCount from "../../ExampleCount/index";
import Years from "../../Years/index";
import Colors from "../../Colors/index";
import Size from "../../Size/index";
import Favorite from "../../Favorite/index";

export const categoriesBlocks = [
  { title: "Forms", component: <Forms /> },
  { title: "Number of examples", component: <ExampleCount /> },
  { title: "Year of purchase", component: <Years /> },
  { title: "Color", component: <Colors /> },
  { title: "Size", component: <Size /> },
  { title: "", component: <Favorite /> },
];
