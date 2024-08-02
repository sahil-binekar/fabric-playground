import React, { createContext, useContext, useState } from 'react';

const CanvasContext = createContext(null);

export const CanvasProvider = ({ children }) => {
  const [canvas, setCanvas] = useState(null);

  const updateCanvasContext = (newCanvas) => {
    setCanvas(newCanvas);
  };

  return (
    <CanvasContext.Provider value={{ canvas, updateCanvasContext }}>
      {children}
    </CanvasContext.Provider>
  );
};

export const useCanvasContext = () => useContext(CanvasContext);