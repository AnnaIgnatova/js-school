import { useState } from "react";
import Draggable from "react-draggable";
import { StoreContextConsumer } from "../../../../StoreContext";
import { ToyInfo } from "../interfaces/ToyInfo";
import { stopDragging } from "../functions/stopDragging";

const Toy = (props: ToyInfo) => {
  const [position, setPos] = useState(props.pos);
  const [target, setTarget] = useState("toys");
  return (
    <StoreContextConsumer>
      {(context) => (
        <Draggable
          defaultPosition={position}
          position={position}
          onStart={(e) => {
            e.preventDefault();
          }}
          onDrag={(e, ui) => {
            setPos({
              x: position.x + ui.deltaX,
              y: position.y + ui.deltaY,
            });
          }}
          onStop={(e) => {
            stopDragging(
              e,
              Number(props.toy.num),
              target,
              context.changeToysCount,
              setTarget,
              setPos
            );
          }}
        >
          <div
            className="toy-item"
            draggable="true"
            style={{ backgroundImage: `url(/toys/${props.toy.num}.png)` }}
          ></div>
        </Draggable>
      )}
    </StoreContextConsumer>
  );
};

export default Toy;
