export const changeTree = (
  e: React.MouseEvent<HTMLDivElement, MouseEvent>,
  chooseTree: (tree: string | undefined) => void
) => {
  const target = e.currentTarget as HTMLElement;
  chooseTree(target.dataset.tree);
};
