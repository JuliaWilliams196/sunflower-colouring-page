
import React, { useState } from "react";
import "./index.css";
import Flower from "../../../src/sunflower.js";
import ColorPalette from "../../../src/ColorPalette.js";

const Colors = () => {
  const [fillColors, setFillColors] = useState(Array(22).fill('white'))
  const [currentColor, setCurrentColor] = useState('plum')

  const onFillColor = (i) => {
    let newFillColors = fillColors.slice(0)
    newFillColors[i] = currentColor
    setFillColors(newFillColors)
  }
  return (
    <div className="App">
      <div className="flower">
        <Flower fillColors={fillColors} onFill={onFillColor} />
      </div>
      <ColorPalette currentColor={currentColor} changeColor={setCurrentColor} />
    </div>
  )
}
export default Colors

