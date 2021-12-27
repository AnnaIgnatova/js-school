import { StoreContextConsumer } from "../../../../StoreContext";
import "./style.css";

const Trees = () => (
  <StoreContextConsumer>
    {(context) => (
      <div className="trees-container">
        {["1", "2", "3", "4"].map((tree) => (
          <div
            className="tree-item-container"
            data-tree={tree}
            onClick={(e) => {
              const target = e.currentTarget as HTMLElement;
              console.log(target.dataset.tree);
              context.chooseTree(target.dataset.tree);
            }}
          >
            <div className={`tree-item tree-${tree}`}></div>
          </div>
        ))}
      </div>
    )}
  </StoreContextConsumer>
);

export default Trees;
