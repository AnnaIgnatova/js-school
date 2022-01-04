import data from "../../../data";
import { StoreContextConsumer } from "../../../StoreContext";
import "./style.css";
import Toy from "./components/Toy";

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
                    {Array.from({ length: +value.count }, (v, k) => k + 1).map(
                      () => {
                        return <Toy toy={value} pos={{ x: 0, y: 0 }} />;
                      }
                    )}

                    <div className="toys-count">
                      {context.toysCount[+value.num - 1]}
                    </div>
                  </div>
                ))
              : data.map((toy) => {
                  if (context.savedToys.includes(toy.num))
                    return (
                      <div className="tree-toy">
                        {Array.from(
                          { length: +toy.count },
                          (v, k) => k + 1
                        ).map(() => {
                          return <Toy toy={toy} pos={{ x: 0, y: 0 }} />;
                        })}
                        <div className="toys-count">
                          {context.toysCount[+toy.num - 1]}
                        </div>
                      </div>
                    );
                })}
          </div>
        </div>
      )}
    </StoreContextConsumer>
  );
};

export default TreeToys;
