import { Position } from "../interfaces/Position";
import { DraggableEvent } from "react-draggable";

const getСlassNameByCoord = (e: DraggableEvent) =>
  document.elementFromPoint(
    (e as MouseEvent).clientX,
    (e as MouseEvent).clientY
  )?.className;

export const stopDragging = (
  e: DraggableEvent,
  num: number,
  target: string,
  changeToysCount: (num: number, bool: boolean) => void,
  setTarget: (target: string) => void,
  setPos: (position: Position) => void
) => {
  (e.target as HTMLElement).classList.add("hide");
  const elemClassName = getСlassNameByCoord(e);

  if (elemClassName === "tree-area") {
    if (target !== "tree") {
      changeToysCount(num - 1, true);
    }
    setTarget("tree");
  } else {
    setPos({ x: 0, y: 0 });
    (e.target as HTMLElement).classList.remove("hide");
    changeToysCount(num - 1, false);
    setTarget("toys");
  }
};
