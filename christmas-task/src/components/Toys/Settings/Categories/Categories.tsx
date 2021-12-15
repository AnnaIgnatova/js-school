import "./Categories.css";
import { categoriesBlocks } from "./constants/categories";
import { createCategoriesBlock } from "./functions/createCategory";

const Categories = () => (
  <>
    <label className="all-categories">
      <input type="checkbox" name="" id="" className="all-categories-input" />
      All
    </label>
    {categoriesBlocks.map(({ title, component }) =>
      createCategoriesBlock(title, component)
    )}
  </>
);

export default Categories;
