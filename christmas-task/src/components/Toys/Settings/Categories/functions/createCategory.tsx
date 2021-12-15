export const createCategoriesBlock = (
  title: string,
  component: JSX.Element
) => (
  <div className="categories-block">
    <span className="categories-title">{title}</span>
    {component}
  </div>
);
