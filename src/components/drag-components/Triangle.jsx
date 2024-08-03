import React, { useContext } from 'react'
import * as fabric from 'fabric';
import { useCanvasContext } from '../CanvasProvider';
import img from '../../assets/img/triangle.png'

function Triangle() {
  var triangle = new fabric.Triangle(
    {
        width: 50,
        height: 50,
        left: 50,
        top: 50,
        fill: 'transparent',
        strokeWidth: 2,
        stroke: 'black',
        strokeUniform: true,
        angle: 0
    }
  );
  const { canvas } = useCanvasContext();
  const { setTriangle } = useCanvasContext();
  
  const handleClick = (e) => {
    canvas.add(triangle);
    setTriangle(triangle);
  }

  return (
    <img className="icon" onClick={handleClick} src={img} width="30" height="30" ></img>
  )
}

export default Triangle