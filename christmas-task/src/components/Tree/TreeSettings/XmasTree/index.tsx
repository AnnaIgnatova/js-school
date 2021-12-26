import { StoreContextConsumer } from "../../../../StoreContext";
import "./style.css";

const XmasTree = () => (
  <StoreContextConsumer>
    {(context) => (
      <div
        className={`tree-bg ${context.bg}`}
        onClick={() => {
          console.log(context);
        }}
      >
        <div className={`x-mas-tree ${context.tree}`}></div>
      </div>
    )}
  </StoreContextConsumer>
);

export default XmasTree;
