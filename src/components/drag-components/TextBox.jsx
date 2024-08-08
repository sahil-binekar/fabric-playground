import React, { useContext } from 'react'
import * as fabric from 'fabric';
import { useCanvasContext } from '../CanvasProvider';
import img from '../../assets/img/text.png'
import ToolTip from '../ToolTip';

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
    <ToolTip title="Add Text">
      <img className="icon" onClick={handleClick} src={img} width="30" height="30" />
    </ToolTip>
  )
}

export default TextBox