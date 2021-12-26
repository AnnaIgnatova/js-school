import { StoreContextConsumer } from "../../../../StoreContext";
import "./style.css";

const Backgrounds = () => (
  <StoreContextConsumer>
    {(context) => (
      <div className="bgs-container">
        {["bg-1", "bg-2", "bg-3", "bg-4", "bg-5", "bg-6", "bg-7", "bg-8"].map(
          (bg) => (
            <div
              className={`bg-item ${bg}`}
              id={bg}
              onClick={(e) => {
                const target = e.currentTarget as HTMLElement;
                context.chooseBG(target.id);
              }}
            ></div>
          )
        )}
      </div>
    )}
  </StoreContextConsumer>
);

export default Backgrounds;
