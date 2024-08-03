import React, { useContext } from 'react'
import * as fabric from 'fabric';
import { useCanvasContext } from '../CanvasProvider';

function TextBox() {
  const text = new fabric.Text('Text Box', 
    {
      left: 100,
      top: 100
    }
  );
  const { canvas } = useCanvasContext();
  
  const handleClick = (e) => {
    canvas.add(text);
  }

  return (
    <div onClick={handleClick}>TextBox</div>
  )
}

export default TextBox