import "./Size.css";

const sizes = ["Big", "Medium", "Small"];

const createSizes = () => {
  return sizes.map((size) => {
    return (
      <label className="size-item">
        <input type="checkbox" name="" id="" className="size-checkbox" />
        {size}
      </label>
    );
  });
};

function Size() {
  return (
    <div className="size">
      <div className="forms-title">Size</div>
      <div className="sizes">{createSizes()}</div>
    </div>
  );
}

export default Size;
