import React, { createContext, useContext, useState } from 'react';

const CanvasContext = createContext(null);

export const CanvasProvider = ({ children }) => {
  const [canvas, setCanvas] = useState(null);
  const [text, setText] = useState();
  const [rect, setRect] = useState();
  const [circle, setCircle] = useState();
  const [triangle, setTriangle] = useState();
  const [brush, setBrush] = useState();
  const [image, setImage] = useState([]);

  const updateCanvasContext = (newCanvas) => {
    setCanvas(newCanvas);
  };

  return (
    <CanvasContext.Provider value={{ canvas, updateCanvasContext, text, setText, rect, setRect, circle, setCircle, triangle, setTriangle, brush, setBrush, image, setImage }}>
      {children}
    </CanvasContext.Provider>
  );
};

export const useCanvasContext = () => useContext(CanvasContext);