import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import mainlogo from "./assets/upanzi.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={mainlogo} className="logo" alt="Vite logo" />
        </a>
      </div>
    </>
  );
}

export default App;