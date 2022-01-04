export const toggleFavorite = (
  e: React.MouseEvent<HTMLDivElement, MouseEvent>,
  removeFromSaved: (id: string) => void,
  toggleSlotsModal: () => void,
  addToSaved: (id: string) => void,
  savedToys: string[]
) => {
  if (!(e.target as HTMLElement).classList.contains("not-favorite-toy")) {
    removeFromSaved((e.target as HTMLElement)?.id);
  } else {
    if (savedToys.length + 1 > 20) {
      toggleSlotsModal();
    } else addToSaved((e.target as HTMLElement)?.id);
  }
};
