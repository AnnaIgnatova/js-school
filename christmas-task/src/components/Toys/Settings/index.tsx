import "./style.css";
import { StoreContextConsumer } from "../../../StoreContext";
import { settingsBlocks } from "./constants/settingsBlocks";
import { SettingsBlock } from "./functions/createSettingsBlock";

const Settings = () => (
  <StoreContextConsumer>
    {(context) => (
      <div className="settings-block">
        <div className="settings-content">
          {settingsBlocks.map(({ name, component }) => (
            <SettingsBlock name={name} component={component} />
          ))}

          <div className="settings-btns">
            <button>Save</button>
            <button onClick={context.resetFilters}>Reset</button>
          </div>
        </div>
      </div>
    )}
  </StoreContextConsumer>
);

export default Settings;
