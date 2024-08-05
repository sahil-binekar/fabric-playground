import React, { useState, useContext, useRef } from 'react'
import * as fabric from 'fabric';
import img from '../assets/img/paper-clip.png'
import { useCanvasContext } from './CanvasProvider';

function FileUpload() {
  const { canvas } = useCanvasContext();
  const [file, setFile] = useState(null);
  const fileInputRef = useRef(null);

  const handleIconClick = () => {
    fileInputRef.current.click();
  };
  
  const imgFilehandler = (e) => {
    if (e.target.files.length !== 0) {
      setFile(URL.createObjectURL(e.target.files[0]))
    }
  }

  const setToCanvas = (e) => {
    var imgElement = document.getElementById('uploaded-img');
    
    var imgInstance = new fabric.Image(imgElement, {
      left: 100,
      top: 100
    });
    imgInstance.scaleToWidth(imgElement.width);
    imgInstance.scaleToHeight(imgElement.height);
    console.log("after:"+canvas);
    canvas.add(imgInstance);
    canvas.renderAll();
    setFile(null);
  }

  return (
    <div>
      <input
        type="file"
        ref={fileInputRef}
        onChange={imgFilehandler}
        style={{ display: 'none' }}
      />
      <img className="icon" onClick={handleIconClick} src={img} width="30" height="30" />
      {file ? <img id='uploaded-img' onClick={setToCanvas} src={file} width="30" height="30" /> : "" }
    </div>
  )
};

export default  FileUpload