import Routes from "./routes/index";
import { BrowserRouter } from "react-router-dom";
import "./index.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </div>
  );
}

export default App;