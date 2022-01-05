import { DraggableEvent } from "react-draggable";

export const getСlassNameByCoord = (e: DraggableEvent) =>
  document.elementFromPoint(
    (e as MouseEvent).clientX,
    (e as MouseEvent).clientY
  )?.className;
