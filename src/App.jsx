import "./App.css";
// import { useSearchParams } from "react-router-dom";

import { BrowserRouter, Route, Routes } from "react-router-dom";

// import Homepage from "./pages/Homepage";
import Scary from "./pages/Scary";

function App() {
  // const [searchParams, setSearchParams] = useSearchParams();

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Scary />} />
        <Route path="scary/" element={<Scary />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
