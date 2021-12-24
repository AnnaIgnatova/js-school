export const selectForm = (
  e: React.MouseEvent<Element, MouseEvent>,
  chooseForm: (id: string) => void
) => {
  const target = e.currentTarget;
  chooseForm(target.id);
  target.querySelector(".form-img")?.classList.toggle("select-form");
};
