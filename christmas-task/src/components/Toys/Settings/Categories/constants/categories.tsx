import Forms from "../../Forms/Forms";
import ExampleCount from "../../ExampleCount/ExampleCount";
import Years from "../../Years/Years";
import Colors from "../../Colors/Colors";
import Size from "../../Size/Size";
import Favorite from "../../Favorite/Favorite";

export const categoriesBlocks = [
  { title: "Forms", component: <Forms /> },
  { title: "Number of examples", component: <ExampleCount /> },
  { title: "Year of purchase", component: <Years /> },
  { title: "Color", component: <Colors /> },
  { title: "Size", component: <Size /> },
  { title: "", component: <Favorite /> },
];
