import data from "../../../data";
import { StoreContextConsumer } from "../../../StoreContext";
import "./style.css";
import Toy from "./Toy";

const TreeToys = () => {
  return (
    <StoreContextConsumer>
      {(context) => (
        <div className="tree-settings tree-toys-block">
          <div className="tree-settings-title">Toys</div>
          <div className="tree-toys-container">
            {context.savedToys.length === 0
              ? data.slice(0, 20).map((value) => (
                  <div className="tree-toy">
                    <Toy toy={value} />
                    <div className="toys-count">{value.count}</div>
                  </div>
                ))
              : data.map((toy) => {
                  if (context.savedToys.includes(toy.num))
                    return <Toy toy={toy} />;
                })}
          </div>
        </div>
      )}
    </StoreContextConsumer>
  );
};

export default TreeToys;
