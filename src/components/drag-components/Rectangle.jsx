import React, { useContext } from 'react'
import * as fabric from 'fabric';
import { useCanvasContext } from '../CanvasProvider';
import img from '../../assets/img/square.png'

function Rectangle() {
  var rect = new fabric.Rect(
    {
        left: 100,
        top: 100,
        width: 50,
        fill: 'transparent',
        strokeWidth: 2,
        stroke: 'black',
        strokeUniform: true,
        height: 50,
        angle: 0
    }
  );
  const { canvas } = useCanvasContext();
  const { setRect } = useCanvasContext();
  
  const handleClick = (e) => {
    canvas.add(rect);
    setRect(rect);
  }

  return (
    <img className="icon" onClick={handleClick} src={img} width="30" height="30" ></img>
  )
}

export default Rectangle