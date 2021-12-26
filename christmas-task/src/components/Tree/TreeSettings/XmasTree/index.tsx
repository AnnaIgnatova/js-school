import { StoreContextConsumer } from "../../../../StoreContext";
import "./style.css";
import "./gareland.css";
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
const XmasTree = () => (
  <StoreContextConsumer>
    {(context) => {
      return (
        <div className={`tree-bg ${context.bg}`}>
          <div className={`x-mas-tree ${context.tree}`}>
            <div
              className={`tree-gareland ${
                context.switchGareland ? "" : "hidden"
              }`}
            >
              {lightropes.map((lightrope, index) => (
                <ul className={`lightrope ${lightrope}`}>
                  {lights[index].map((light: string, i) => (
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
          </div>
        </div>
      );
    }}
  </StoreContextConsumer>
);

export default XmasTree;
