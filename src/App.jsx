import Combine from "./pages/Combine";
import Combine1 from "./pages/Combine1";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Combine />} />
        <Route path="/post" element={<Combine1 />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
