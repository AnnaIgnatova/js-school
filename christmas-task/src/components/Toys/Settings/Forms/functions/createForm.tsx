export const createToyForm = (name: string) => (
  <div className="form-wrapper">
    <div className={`form-img form-img-${name}`}></div>
    <div className="form-title">{name}</div>
  </div>
);
