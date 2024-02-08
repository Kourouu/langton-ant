import { useCallback, useRef, useState } from "react";

import { Ant } from "../Ant/Ant";

import "./Cell.css";

export const Cell = ({ x, y }: { x: number; y: number }) => {
  const [currentAntPosition, setCurrentPosition] = useState({ x: 5, y: 5 });
  const [orientation, setOrientation] = useState(0);
  const [backgroundColor, setBackgroundColor] = useState("black");

  const cellRef = useRef<HTMLInputElement>(null);

  const toggleBackgroundColor = useCallback(
    () => setBackgroundColor(backgroundColor == "white" ? "black" : "white"),
    [backgroundColor]
  );
  const isCurrentCell =
    currentAntPosition.x === x && currentAntPosition.y === y;

  const className = (): string => {
    switch (orientation) {
      case 0:
        return "ant-up";
      case 90:
        return "ant-right";
      case 180:
        return "ant-down";
      case 270:
        return "ant-left";
      default:
        return "error";
    }
  };

  const calculateNextPosition = useCallback(
    (currentAntPosition: { x: number; y: number }, orientation: number) => {
      switch (orientation) {
        case 0:
          return { x: currentAntPosition.x, y: currentAntPosition.y - 1 };
        case 90:
          return { x: currentAntPosition.x + 1, y: currentAntPosition.y };
        case 180:
          return { x: currentAntPosition.x, y: currentAntPosition.y + 1 };
        case 270:
          return { x: currentAntPosition.x - 1, y: currentAntPosition.y };
        default:
          return { x: currentAntPosition.x, y: currentAntPosition.y - 1 };
      }
    },
    []
  );

  const calculateNextOrientation = (currentCellColor?: string) => {
    if (currentCellColor === "white") {
      return orientation === 270 ? 0 : orientation + 90;
    }
    return orientation === 0 ? 270 : orientation - 90;
  };

  setTimeout(() => {
    setCurrentPosition(calculateNextPosition(currentAntPosition, orientation));
    if (isCurrentCell) {
      console.log(orientation);
      console.log(cellRef.current?.style.backgroundColor);
      toggleBackgroundColor();
    }
    setOrientation(
      calculateNextOrientation(cellRef.current?.style.backgroundColor)
    );
  }, 1500);

  return (
    <div
      ref={cellRef}
      className="cell"
      data-x={x}
      data-y={-y}
      style={{ backgroundColor: backgroundColor }}
    >
      {isCurrentCell && <Ant className={className()} />}
    </div>
  );
};
