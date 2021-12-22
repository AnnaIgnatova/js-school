import "./Forms.css";
import { forms } from "./constants/const";
import { createToyForm } from "./functions/createForm";
import { StoreContextConsumer } from "../../../../StoreContext";

const Forms = () => (
  <StoreContextConsumer>
    {(context) => (
      <div className="all-forms">
        {forms.map((name) => (
          <div
            className="form-wrapper"
            id={name}
            onClick={(e) => {
              context.chooseForm(e.currentTarget.id);
              e.currentTarget
                .querySelector(".form-img")
                ?.classList.toggle("select-form");
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
