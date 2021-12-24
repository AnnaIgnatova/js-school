import "./style.css";
import { sortingRules } from "./constants/sortingRules";
import { StoreContextConsumer } from "../../../../StoreContext";

const sortingIdArr = ["byNameAcs", "byNameDesc", "byYearAcs", "byYearDesc"];

const Sorting = () => (
  <StoreContextConsumer>
    {(context) => (
      <div className="sorting-select">
        <div
          className="sorting-select-default"
          onClick={() => {
            document
              .querySelector(".select-choose")
              ?.classList.toggle("hidden");
          }}
        >
          <span className="default-text"> {sortingRules[0]}</span>
          <div className="arrow-select"></div>
        </div>
        <div className="select-choose hidden">
          {sortingRules.map((rule, index) => (
            <div
              className="select-item"
              id={sortingIdArr[index]}
              onClick={(e) => {
                const { target } = e;
                context.chooseSortingRule((target as HTMLElement).id);
                document.querySelector(".default-text")!.textContent =
                  sortingRules[index];
                document
                  .querySelector(".select-choose")
                  ?.classList.add("hidden");
              }}
            >
              {rule}
            </div>
          ))}
        </div>
      </div>
    )}
  </StoreContextConsumer>
);

export default Sorting;
