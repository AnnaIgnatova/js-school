import { StoreContextConsumer } from "../../../../StoreContext";
import "./style.css";
import { changeTree } from "./functions/changeTree";

const Trees = () => (
  <StoreContextConsumer>
    {(context) => (
      <div className="trees-container">
        {["1", "2", "3", "4"].map((tree) => (
          <div
            className="tree-item-container"
            data-tree={tree}
            onClick={(e) => {
              changeTree(e, context.chooseTree);
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
