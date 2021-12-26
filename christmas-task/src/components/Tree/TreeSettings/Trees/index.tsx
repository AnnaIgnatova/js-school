import { StoreContextConsumer } from "../../../../StoreContext";
import "./style.css";

const Trees = () => (
  <StoreContextConsumer>
    {(context) => (
      <div className="trees-container">
        {["tree-1", "tree-2", "tree-3", "tree-4"].map((tree) => (
          <div
            className="tree-item-container"
            id={tree}
            onClick={(e) => {
              const target = e.currentTarget as HTMLElement;
              context.chooseTree(target.id);
            }}
          >
            <div className={`tree-item ${tree}`}></div>
          </div>
        ))}
      </div>
    )}
  </StoreContextConsumer>
);

export default Trees;
