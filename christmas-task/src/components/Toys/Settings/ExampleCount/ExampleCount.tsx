import "./ExampleCount.css";

function ExampleCount() {
  return (
    <div className="examples">
      <div className="forms-title">Number of copies</div>
      <input type="range" name="" id="" className="examples-input" />
      <div className="count-ranges">
        <div className="range-min">1</div>
        <div className="range-max">12</div>
      </div>
    </div>
  );
}

export default ExampleCount;
