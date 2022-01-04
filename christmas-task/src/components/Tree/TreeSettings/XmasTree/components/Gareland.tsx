import { lightropes, flashes, lights } from "../constants/gareland";

const TreeGarelang = (props: { gareland: string }) =>
  lightropes.map((lightrope, index) => (
    <ul className={`lightrope ${lightrope}`}>
      {lights[index].map((light, i) => (
        <li
          className={light}
          style={
            !(props.gareland === "rainbow")
              ? { animationName: props.gareland }
              : { animationName: flashes[i] }
          }
        ></li>
      ))}
    </ul>
  ));

export default TreeGarelang;
