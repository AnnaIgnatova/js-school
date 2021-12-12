import "./Forms.css";

const forms = ["ball", "bell", "pine", "snowflake", "figure"];

const createForm = (name: string) => {
  return (
    <div className="form-wrapper">
      <div className={`form-img form-img-${name}`}></div>
      <div className="form-title">{name}</div>
    </div>
  );
};

const createForms = () => {
  return forms.map((name) => {
    return createForm(name);
  });
};

function Forms() {
  return (
    <div className="forms">
      <span className="forms-title">Forms</span>
      <div className="all-forms">{createForms()}</div>
    </div>
  );
}

export default Forms;
