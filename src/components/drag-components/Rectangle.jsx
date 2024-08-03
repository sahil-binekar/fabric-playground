import React, { useContext } from 'react'
import * as fabric from 'fabric';
import { useCanvasContext } from '../CanvasProvider';

function Rectangle() {
  var rect = new fabric.Rect(
    {
        left: 100,
        top: 100,
        width: 20,
        fill: 'transparent',
        strokeWidth: 2,
        stroke: 'black',
        strokeUniform: true,
        height: 20,
        angle: 0
    }
  );
  const { canvas } = useCanvasContext();
  
  const handleClick = (e) => {
    canvas.add(rect);
  }

  return (
    <div onClick={handleClick}>Rectangle</div>
  )
}

export default Rectangle