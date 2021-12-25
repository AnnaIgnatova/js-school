import "./style.css";
import Trees from "./Trees";
import Backgrounds from "./Backgrounds";
import Garland from "./Garland";

const settingsBlocks = [
  { title: "choose tree", component: <Trees /> },
  { title: "choose background", component: <Backgrounds /> },
  { title: "choose garland", component: <Garland /> },
];

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
