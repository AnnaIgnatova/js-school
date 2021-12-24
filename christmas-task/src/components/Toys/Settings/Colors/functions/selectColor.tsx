export const selectColor = (
  e: React.MouseEvent<Element, MouseEvent>,
  chooseColor: (id: string) => void
): void => {
  const target = e.currentTarget as HTMLElement;
  target?.querySelector(".line")?.classList.toggle("hidden");
  chooseColor(target.id);
};
