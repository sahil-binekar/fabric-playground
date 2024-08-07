import React, { useEffect, useRef } from 'react';
import * as fabric from 'fabric';
import { useCanvasContext } from './CanvasProvider';

function FabricCanvas() {
  const canvasEl = useRef(null);
  const { updateCanvasContext } = useCanvasContext();

  useEffect(() => {
    const canvas = new fabric.Canvas(canvasEl.current, { isDrawingMode: false } );

    updateCanvasContext(canvas);
    return () => {
      updateCanvasContext(null);
      canvas.dispose();
    }
  }, []);

  return <canvas width="930" height="1002" ref={canvasEl}/>;
}

export default FabricCanvas;