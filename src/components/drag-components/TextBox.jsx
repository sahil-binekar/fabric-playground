import React, { useContext } from 'react'
import * as fabric from 'fabric';
import { useCanvasContext } from '../CanvasProvider';
import img from '../../assets/img/text.png'

function TextBox() {
  const text = new fabric.Textbox('Text Box',
    {
      left: 100,
      top: 100
    }
  );
  const { canvas } = useCanvasContext();
  const { setText } = useCanvasContext();
  
  const handleClick = (e) => {
    canvas.add(text);
    setText(text);
    canvas.renderAll();
  }

  return (
    <img className="icon" onClick={handleClick} src={img} width="30" height="30" ></img>
  )
}

export default TextBox