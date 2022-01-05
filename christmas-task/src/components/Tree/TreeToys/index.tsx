import data from "../../../data";
import { StoreContextConsumer } from "../../../StoreContext";
import "./style.css";
import TreeToyContainer from "./components/ToyContainer";

const TreeToys = () => {
  return (
    <StoreContextConsumer>
      {(context) => (
        <div className="tree-settings tree-toys-block">
          <div className="tree-settings-title">Toys</div>
          <div className="tree-toys-container">
            {context.savedToys.length === 0
              ? data
                  .slice(0, 20)
                  .map((toy) => (
                    <TreeToyContainer toy={toy} toysCount={context.toysCount} />
                  ))
              : data
                  .filter((toy) => context.savedToys.includes(toy.num))
                  .map((toy) => (
                    <TreeToyContainer toy={toy} toysCount={context.toysCount} />
                  ))}
          </div>
        </div>
      )}
    </StoreContextConsumer>
  );
};

export default TreeToys;
