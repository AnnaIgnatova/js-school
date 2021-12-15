import "./Colors.css";
import { colors } from "./constants/const";
import { createColorBlock } from "./functions/createColor";

const Colors = () => (
  <div className="all-forms">
    {colors.map((color) => createColorBlock(color))}
  </div>
);

export default Colors;
