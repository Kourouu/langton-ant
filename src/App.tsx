// import { useState } from 'react';
import './App.css'
// import { Input } from './components/Input/Input';
import { Grid } from './components/Grid/Grid';

export const App = () => {
  // const [squareNumberBySide, setSquareNumberBySide] = useState(18);
  const squareNumberBySide = 18;

  return (
    <>
      {/* <Input handleChange={setSquareNumberBySide} /> */}
      <Grid squareNumberBySide={squareNumberBySide}/>    
    </>
  )
}