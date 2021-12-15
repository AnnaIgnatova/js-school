import "./Forms.css";
import { forms } from "./constants/const";
import { createToyForm } from "./functions/createForm";

const Forms = () => (
  <div className="all-forms">{forms.map((name) => createToyForm(name))}</div>
);

export default Forms;
