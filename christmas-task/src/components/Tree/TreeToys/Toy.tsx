import { url } from "inspector";
import { useDrag } from "react-dnd";
import { StoreContextConsumer } from "../../../StoreContext";

interface ToyInfo {
  toy: {
    num: string;
    name: string;
    count: string;
    year: string;
    shape: string;
    color: string;
    size: string;
    favorite: boolean;
  };
}

const Toy = (props: ToyInfo) => {
  // const [{ isDragging }, drag] = useDrag(() => ({
  //   type: "img",
  //   item: { id: props.toy.num },
  //   collect: (monitor) => ({
  //     isDragging: !!monitor.isDragging(),
  //   }),
  // }));
  // console.log("coord:", props.coord);
  return (
    <StoreContextConsumer>
      {(context) => (
        <div
          onDragStart={(e) => {
            (e.target as HTMLElement).style.position = "absolute";
          }}
          onDragEnd={(e) => {
            // console.log(e.clientX);
            console.log(e);
          }}
          // ref={drag}
          className="toy-item"
          draggable="true"
          style={{ backgroundImage: `url(/toys/${props.toy.num}.png)` }}
        ></div>
      )}
    </StoreContextConsumer>
  );
};

export default Toy;
