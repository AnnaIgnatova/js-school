import { sortingRules } from "../constants/sortingRules";

export const selectSortingRule = (
  e: React.MouseEvent<Element, MouseEvent>,
  chooseSort: (id: string) => void,
  index: number
) => {
  const { target } = e;
  chooseSort((target as HTMLElement).id);
  document.querySelector(".default-text")!.textContent = sortingRules[index];
  document.querySelector(".select-choose")?.classList.add("hidden");
};
