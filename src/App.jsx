import './App.css'
import FabricContainer from './components/FabricContainer'
import { CanvasProvider } from './components/CanvasProvider'; // Adjust the import path as necessary

function App() {

  return (
    <>
    <CanvasProvider>
      <FabricContainer />
    </CanvasProvider>
    </>
  )
}

export default App
