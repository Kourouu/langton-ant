import { Row } from "../Row/Row";

export const Column = ({squareNumberBySide}: {squareNumberBySide: number}) => {
  const column: JSX.Element[] = [];

  for (let i=0; i < squareNumberBySide; i++) {
    column.push(<Row squareNumberBySide={squareNumberBySide} y={i}/>)
  }
  return (<>
    {column.map((row, index) => (<div className={`row-${index}`} style={{display: 'flex'}}>{row}</div>))}
    </>)
}