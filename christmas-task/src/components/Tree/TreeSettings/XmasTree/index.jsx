import { StoreContextConsumer } from "../../../../StoreContext";
import "./style.css";
import "./gareland.css";
import { useDrop } from "react-dnd";
import { useState } from "react";
import data from "../../../../data";
import Toy from "../../TreeToys/Toy";

const lightropes = [
  "lightrope-1",
  "lightrope-2",
  "lightrope-3",
  "lightrope-4",
  "lightrope-5",
  "lightrope-6",
  "lightrope-7",
  "lightrope-8",
  "lightrope-9",
  "lightrope-10",
  "lightrope-11",
];

const lights = [
  ["odd-light", "even-light"],
  ["odd-light", "even-light", ""],
  ["odd-light", "even-light", "", "odd-light"],
  ["odd-light", "even-light", "", "odd-light", "even-light"],
  ["odd-light", "even-light", "", "odd-light", "even-light"],
  ["odd-light", "even-light", "", "odd-light", "even-light", ""],
  ["odd-light", "even-light", "", "odd-light", "even-light", "", "odd-light"],
  [
    "odd-light",
    "even-light",
    "",
    "odd-light",
    "even-light",
    "",
    "odd-light",
    "even-light",
  ],
  [
    "odd-light",
    "even-light",
    "",
    "odd-light",
    "even-light",
    "",
    "odd-light",
    "even-light",
    "",
  ],
  [
    "odd-light",
    "even-light",
    "",
    "odd-light",
    "even-light",
    "",
    "odd-light",
    "even-light",
    "",
  ],
  [
    "odd-light",
    "even-light",
    "",
    "odd-light",
    "even-light",
    "",
    "odd-light",
    "even-light",
    "",
  ],
];

const flashes = [
  "flash-1",
  "flash-2",
  "flash-3",
  "flash-1",
  "flash-2",
  "flash-3",
  "flash-1",
  "flash-2",
  "flash-3",
];
const XmasTree = () => {
  // const [toys, setToys] = useState([]);
  // const [toyItem, setToy] = useState("");
  // const [coo, setCoord] = useState([]);
  // const [y, setY] = useState(0);
  // const [x, setX] = useState(0);

  // const addToyToTree = (id) => {
  //   const toysList = data.filter((toy) => toy.num === id);
  //   setToys((toy) => [...toy, toysList[0]]);
  // };
  // let xy = [];
  // const [{ isOver, coord }, drop] = useDrop(() => ({
  //   accept: "img",
  //   drop: (toy) => {
  //     if (!toyItem) setToy(toy.id);
  //     addToyToTree(toy.id);
  //   },
  //   collect: (monitor) => {
  //     if (monitor.getSourceClientOffset()) {
  //       xy = Object.values(monitor.getSourceClientOffset());
  //     }
  //     return {
  //       isOver: !!monitor.isOver(),
  //       coord: {
  //         [toyItem]: xy,
  //       },
  //     };
  //   },
  // }));
  // console.log("norm", coord);
  return (
    <StoreContextConsumer>
      {(context) => {
        return (
          <div className={`tree-bg ${context.bg}`}>
            <img src={`../tree/${context.tree}.png`} usemap="#image-map" />
            <map
              name="image-map"
              onClick={(e) => {
                e.preventDefault();
              }}
            >
              <area
                // ref={drop}
                coords="421,446,456,663,34,640,90,346,177,155,250,8,328,139,368,238,395,316,406,386"
                shape="poly"
              />
              {/* {toys.map((toy) => (
                <Toy toy={toy} />
              ))} */}
              <div
                className={`tree-gareland ${
                  context.switchGareland ? "" : "hidden"
                }`}
              >
                {lightropes.map((lightrope, index) => (
                  <ul className={`lightrope ${lightrope}`}>
                    {lights[index].map((light, i) => (
                      <li
                        className={light}
                        style={
                          !(context.gareland === "rainbow")
                            ? { animationName: context.gareland }
                            : { animationName: flashes[i] }
                        }
                      ></li>
                    ))}
                  </ul>
                ))}
              </div>
            </map>
          </div>
        );
      }}
    </StoreContextConsumer>
  );
};

export default XmasTree;
