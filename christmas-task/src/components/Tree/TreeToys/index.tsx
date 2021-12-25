import data from "../../../data";
import { StoreContextConsumer } from "../../../StoreContext";
import "./style.css";

const TreeToys = () => (
  <StoreContextConsumer>
    {(context) => (
      <div className="tree-settings tree-toys-block">
        <div className="tree-settings-title">Toys</div>
        <div className="tree-toys-container">
          {context.savedToys.length === 0
            ? data.slice(0, 20).map((value) => {
                return (
                  <div className="tree-toy">
                    <div
                      className="toy-item"
                      style={{
                        backgroundImage: `url(/toys/${value.num}.png)`,
                      }}
                    ></div>
                    <div className="toys-count">{value.count}</div>
                  </div>
                );
              })
            : data.map((toy) => {
                if (context.savedToys.length === 0) {
                  data.slice(0, 20).map((value) => {
                    return (
                      <div className="tree-toy">
                        <div
                          className="toy-item"
                          style={{
                            backgroundImage: `url(/toys/${value.num}.png)`,
                          }}
                        ></div>
                        <div className="toys-count">{value.count}</div>
                      </div>
                    );
                  });
                }
              })}
        </div>
      </div>
    )}
  </StoreContextConsumer>
);

export default TreeToys;
