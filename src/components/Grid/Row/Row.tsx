import { Cell } from "../../Cell/Cell";

export const Row = ({
  squareNumberBySide,
  y,
}: {
  squareNumberBySide: number;
  y: number;
}) => {
  const row: JSX.Element[] = [];

  for (let i = 0; i < squareNumberBySide; i++) {
    row.push(<Cell x={i} y={y} />);
  }

  return (
    <>
      {row.map((square) => {
        return <div className="row">{square}</div>;
      })}
    </>
  );
};
