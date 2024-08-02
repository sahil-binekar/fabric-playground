import React, { useEffect, useRef } from 'react';
import * as fabric from 'fabric';
import { useCanvasContext } from './CanvasProvider';

function FabricCanvas() {
  const canvasEl = useRef(null);
  const { updateCanvasContext } = useCanvasContext();

  useEffect(() => {
    const canvas = new fabric.Canvas(canvasEl.current);

    updateCanvasContext(canvas);
    return () => {
      updateCanvasContext(null);
      canvas.dispose();
    }
  }, []);

  return <canvas width="928" height="1000" ref={canvasEl}/>;
}

export default FabricCanvas;