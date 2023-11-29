import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import UserPage from "./pages/Login";
import DetailPage from "./pages/Detail";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/detail/:id" element={<DetailPage />} />
          <Route path="/user/:type" element={<UserPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
