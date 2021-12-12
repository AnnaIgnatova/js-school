import Sorting from "./Sorting/Sorting";
import Forms from "./Forms/Forms";
import "./Settings.css";
import Categories from "./Categories/Categories";
import ExampleCount from "./ExampleCount/ExampleCount";
import Years from "./Years/Years";
import Colors from "./Colors/Colors";
import Size from "./Size/Size";
import Favorite from "./Favorite/Favorite";

function Settings() {
  return (
    <div className="container">
      <div className="settings">
        <Sorting />
        <Categories />
        <Forms />
        <ExampleCount />
        <Years />
        <Colors />
        <Size />
        <Favorite />
        <div className="settings-btns">
          <button>Save</button>
          <button>Reset</button>
        </div>
      </div>
    </div>
  );
}

export default Settings;
