import "./Colors.css";

const colors = ["white", "yellow", "red", "blue", "green"];

const createColorsBlock = () => {
  return colors.map((color) => {
    return <div className="color" style={{ backgroundColor: color }}></div>;
  });
};

function Colors() {
  return (
    <div className="colors">
      <span className="forms-title">Colors</span>
      <div className="all-forms">{createColorsBlock()}</div>
    </div>
  );
}

export default Colors;
