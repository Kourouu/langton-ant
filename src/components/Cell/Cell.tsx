import { useCallback, useEffect, useState } from "react";

import { Ant } from "../Ant/Ant";

import './Cell.css'

export const Cell = ({x, y}: {x: number, y: number}) => {
  const [currentAntPosition, setCurrentPosition]=useState({x:5,y:5})
  const [orientation, setOrientation] = useState(0);

  const className = (): string => {
    switch(orientation) {
      case 0:
        return 'ant-up';
      case 90:
        return 'ant-right';
      case 180:
        return 'ant-down';
      case 270:
        return 'ant-left';
      default:
        return 'error'
    }
  }

  const calculateNextPosition = useCallback((currentAntPosition: {x: number, y: number}, orientation: number) => {
    switch(orientation) {
      case 0:
        return {x: currentAntPosition.x, y: currentAntPosition.y -1};
      case 90:
        return {x: currentAntPosition.x, y: currentAntPosition.y -1};
      case 180:
        return {x: currentAntPosition.x, y: currentAntPosition.y -1};
      case 270:
        return {x: currentAntPosition.x, y: currentAntPosition.y -1};
      default:
        return {x: currentAntPosition.x, y: currentAntPosition.y -1};
        ;
    }
  }, []);

  useEffect(() => {
    setTimeout(() => setCurrentPosition(calculateNextPosition(currentAntPosition, orientation)),500)
  },[currentAntPosition, orientation, calculateNextPosition])


  const [backgroundColor, setBackgroundColor] = useState('#FFFFFF')
  const toggleBackgroundColor = () => setBackgroundColor(backgroundColor == '#FFFFFF' ? '#000000' : '#FFFFFF');
  const isCurrentCell = currentAntPosition.x === x && currentAntPosition.y === y
  return (
    <div className="cell"
    data-x={x}
    data-y={-y}
    style={{backgroundColor: backgroundColor}}
    onMouseOver={() => toggleBackgroundColor()}>
      {isCurrentCell && (
        <Ant className={className()} />
      )}
  </div>
  )
}


  