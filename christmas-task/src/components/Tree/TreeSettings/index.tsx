import "./style.css";
import { settingsBlocks } from "./constants/settingsBlocks";

const TreeSettings = () => (
  <div className="tree-settings">
    {settingsBlocks.map(({ title, component }) => (
      <>
        <div className="tree-settings-title">{title}</div>
        <div className="tree-settings-block">{component}</div>
      </>
    ))}
    <div className="trees-btns">
      <button>Share</button>
      <button>Save</button>
    </div>
  </div>
);

export default TreeSettings;
