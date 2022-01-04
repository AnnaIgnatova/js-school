export const changeGareland = (
  e: React.MouseEvent<HTMLDivElement, MouseEvent>,
  setGareland: (bool: boolean) => void,
  chooseGareland: (id: string) => void,
  switchGareland: boolean
) => {
  if ((e.currentTarget as HTMLElement).id === "none") setGareland(false);
  if ((e.currentTarget as HTMLElement).id !== "none" && !switchGareland)
    setGareland(true);
  chooseGareland(e.currentTarget.id);
};
