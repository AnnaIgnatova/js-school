import { ToyProp } from "../interfaces/ToyInfo";
import Toy from "./Toy";

const TreeToyContainer = (props: ToyProp) => (
  <div className="tree-toy">
    {Array.from({ length: +props.toy.count }, (v, k) => k + 1).map(() => {
      return <Toy toy={props.toy} pos={{ x: 0, y: 0 }} />;
    })}
    <div className="toys-count">{props.toysCount[+props.toy.num - 1]}</div>
  </div>
);

export default TreeToyContainer;
