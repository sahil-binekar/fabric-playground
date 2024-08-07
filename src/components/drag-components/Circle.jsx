import React, { useContext } from 'react'
import * as fabric from 'fabric';
import { useCanvasContext } from '../CanvasProvider';
import img from '../../assets/img/oval.png'

function Circle() {
  var circle = new fabric.Circle(
    {
        radius: 25,
        left: 100,
        top: 100,
        fill: 'transparent',
        strokeWidth: 2,
        stroke: 'black',
        strokeUniform: true,
        height: 50,
        width: 50,
    }
  );
  const { canvas } = useCanvasContext();
  const { setCircle } = useCanvasContext();
  
  const handleClick = (e) => {
    canvas.add(circle);
    setCircle(circle);
  }

  return (
    <img className="icon" onClick={handleClick} src={img} width="30" height="30" ></img>
  )
}

export default Circle