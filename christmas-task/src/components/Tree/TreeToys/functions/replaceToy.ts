import { DraggableEvent } from "react-draggable";
import { Position } from "../interfaces/Position";

export const replaceToyOnTree = (
  target: string,
  changeToysCount: (num: number, bool: boolean) => void,
  setTarget: (target: string) => void,
  num: number
) => {
  if (target !== "tree") {
    changeToysCount(num - 1, true);
    setTarget("tree");
  }
};

export const replaceToyFromTree = (
  setPos: ({ x, y }: Position) => void,
  e: DraggableEvent,
  changeToysCount: (num: number, bool: boolean) => void,
  setTarget: (target: string) => void,
  num: number,
  target: string
) => {
  setPos({ x: 0, y: 0 });
  (e.target as HTMLElement).classList.remove("hide");
  if (target === "tree") {
    changeToysCount(num - 1, false);
    setTarget("toys");
  }
};
