import "./Sorting.css";

function Sorting() {
  return (
    <div className="sorting">
      <span className="sorting-title">Sorting</span>
      <div className="sorting-select">
        <div className="sorting-select-default">
          By name from "A" to "Z"
          <div className="arrow-select"></div>
        </div>
        <div className="select-choose">
          <div className="select-item">By name from "A" to "Z"</div>
          <div className="select-item">By name from "Z" to "A"</div>
          <div className="select-item">By quantity ascending</div>
          <div className="select-item">By quantity descending</div>
        </div>
      </div>
    </div>
  );
}

export default Sorting;
