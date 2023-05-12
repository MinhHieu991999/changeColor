import Appchild from "./Appchild";
import { useState, createContext } from "react";

export const ColorContext = createContext()


function App() {

  const [color, setColor] = useState('red')
  const handleColor = () => { setColor(color === 'red' ? 'green' : 'red') }

  return (
    <ColorContext.Provider value={handleColor}>
      <div className="App">
        <h1
          style={{ color: color }}
        >
          hello
        </h1>
        <Appchild />
      </div >
    </ColorContext.Provider>
  );
}

export default App
