import React, { useContext } from 'react'
import * as fabric from 'fabric';
import { useCanvasContext } from '../CanvasProvider';
import img from '../../assets/img/scribble.png'

function Pencil() {
  const brush = new fabric.PencilBrush();
  const { canvas } = useCanvasContext();
  brush.color = 'red';
  brush.width = 4;
  const { setBrush } = useCanvasContext();
  
  const handleClick = (e) => {
    canvas.isDrawingMode = true;
    canvas.freeDrawingBrush = brush;
    setBrush(brush);
    canvas.renderAll();
  }

  return (
    <img className="icon" onClick={handleClick} src={img} width="30" height="30" ></img>
  )
}

export default Pencil