import { Position } from "../interfaces/Position";
import { DraggableEvent } from "react-draggable";
import { getСlassNameByCoord } from "./getElemByCoord";
import { replaceToyFromTree, replaceToyOnTree } from "./replaceToy";

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

  if (elemClassName === "tree-area")
    replaceToyOnTree(target, changeToysCount, setTarget, num);
  else replaceToyFromTree(setPos, e, changeToysCount, setTarget, num, target);
};
