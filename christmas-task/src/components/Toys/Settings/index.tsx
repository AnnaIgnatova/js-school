import Sorting from "./Sorting/index";
import "./style.css";
import Categories from "./Categories/index";
import { StoreContextConsumer } from "../../../StoreContext";

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
  <StoreContextConsumer>
    {(context) => (
      <div className="settings">
        <div className="settings-content">
          {settingsBlocks.map(({ name, component }) =>
            createSettingsBlock(name, component)
          )}

          <div className="settings-btns">
            <button>Save</button>
            <button
              onClick={() => {
                context.resetFilters();
              }}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    )}
  </StoreContextConsumer>
);

export default Settings;
