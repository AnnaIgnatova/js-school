import { StoreContextConsumer } from "../../../../StoreContext";
import "./Categories.css";
import { categoriesBlocks } from "./constants/categories";
import { createCategoriesBlock } from "./functions/createCategory";

const Categories = () => (
  <StoreContextConsumer>
    {(context) => (
      <>
        <label className="all-categories">
          <input
            type="checkbox"
            name=""
            id=""
            className="all-categories-input"
            onChange={() => {
              context.toggleAllChecked();
            }}
          />
          All
        </label>
        {categoriesBlocks.map(({ title, component }) =>
          createCategoriesBlock(title, component)
        )}
      </>
    )}
  </StoreContextConsumer>
);

export default Categories;
