import "./App.css";
// import { useSearchParams } from "react-router-dom";

import { BrowserRouter, Route, Routes } from "react-router-dom";

// import Homepage from "./pages/Homepage";
import Scary from "./pages/Scary";

function App() {
  // const [searchParams, setSearchParams] = useSearchParams();

  return (
    <>
      {/* <h1 className="text-3xl font-bold m-5">Hello world!</h1> */}
      <BrowserRouter>
        <Routes>
          <Route index element={<Scary />} />
          <Route path="scary/" element={<Scary />} />
        </Routes>
      </BrowserRouter>
      {/* <button onClick={() => setSearchParams({ lat: 23, lng: 12 })}>
        Set Params
      </button> */}
    </>
  );
}

export default App;
