export const changeBg = (
  e: React.MouseEvent<HTMLDivElement, MouseEvent>,
  chooseBG: (id: string) => void
) => {
  const target = e.currentTarget as HTMLElement;
  chooseBG(target.id);
};
