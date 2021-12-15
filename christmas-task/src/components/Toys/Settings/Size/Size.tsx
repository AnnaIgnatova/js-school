import "./Size.css";
import { createToySize } from "./functions/createToySize";
import { toySizes } from "./constants/toySizes";

const Size = () => (
  <div className="sizes">{toySizes.map((size) => createToySize(size))}</div>
);

export default Size;
