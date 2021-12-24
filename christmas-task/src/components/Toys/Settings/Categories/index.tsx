import "./style.css";
import { categoriesBlocks } from "./constants/categories";

const Categories = () => (
  <>
    {categoriesBlocks.map(({ title, component }) => (
      <div className="categories-block">
        <span className="categories-title">{title}</span>
        {component}
      </div>
    ))}
  </>
);

export default Categories;
