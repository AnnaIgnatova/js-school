import "./style.css";
import { StoreContextConsumer } from "../../../../../StoreContext";
import { selectForm } from "./functions/createForm";

const Forms = () => (
  <StoreContextConsumer>
    {(context) => (
      <div className="all-forms">
        {["ball", "bell", "pine", "snowflake", "figure"].map((name) => (
          <div
            className="form-wrapper"
            id={name}
            onClick={(e) => {
              selectForm(e, context.chooseForm);
            }}
          >
            <div
              className={`form-img form-img-${name} ${
                context.forms[name] ? "select-form" : ""
              }`}
            ></div>
            <div className="form-title">{name}</div>
          </div>
        ))}
      </div>
    )}
  </StoreContextConsumer>
);

export default Forms;
