import Sorting from "./Sorting/Sorting";
import "./Settings.css";
import Categories from "./Categories/Categories";

const settingsBlocks = [
  { name: "sorting", component: <Sorting /> },
  { name: "categories", component: <Categories /> },
];

const createSettingsBlock = (name: string, component: JSX.Element) => (
  <div className={`settings-block ${name}`}>
    <span className="settings-block-title">{name}</span>
    {component}
  </div>
);

const Settings = () => (
  <div className="settings">
    <div className="settings-content">
      {settingsBlocks.map(({ name, component }) =>
        createSettingsBlock(name, component)
      )}

      <div className="settings-btns">
        <button>Save</button>
        <button>Reset</button>
      </div>
    </div>
  </div>
);

export default Settings;
