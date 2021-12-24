import "./style.css";
import { categoriesBlocks } from "./constants/categories";
import { createCategoriesBlock } from "./functions/createCategory";

const Categories = () => (
  <>
    {categoriesBlocks.map(({ title, component }) =>
      createCategoriesBlock(title, component)
    )}
  </>
);

export default Categories;
