import startSnow from "./startSnow";

const toggleSnowing = (
  e: React.MouseEvent<HTMLDivElement, MouseEvent>,
  setSnowing: (snowing: boolean) => void,
  snowing: boolean
) => {
  e.currentTarget.classList.toggle("select-icon");
  startSnow(snowing);

  if (!snowing) {
    setSnowing(true);
  } else {
    setSnowing(false);
  }
};

export default toggleSnowing;
