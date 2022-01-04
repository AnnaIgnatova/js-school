import { StoreContextConsumer } from "../../../../StoreContext";
import "./style.css";
import "./gareland.css";
import TreeGarelang from "./components/Gareland";

const XmasTree = () => {
  return (
    <StoreContextConsumer>
      {(context) => {
        return (
          <div className={`tree-bg ${context.bg}`}>
            <img src={`../tree/${context.tree}.png`} usemap="#image-map" />
            <map name="image-map">
              <area
                className="tree-area"
                coords="421,446,456,663,34,640,90,346,177,155,250,8,328,139,368,238,395,316,406,386"
                shape="poly"
              />

              <div
                className={`tree-gareland ${
                  context.switchGareland ? "" : "hidden"
                }`}
              >
                <TreeGarelang gareland={context.gareland} />
              </div>
            </map>
          </div>
        );
      }}
    </StoreContextConsumer>
  );
};

export default XmasTree;
