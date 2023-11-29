import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
// import AppContextProvider from "./context/appContext";
// import ProfilePage from "./pages/Profile";
import HomePage from "./pages/Home";
import UserPage from "./pages/Login";
import DetailPage from "./pages/Detail";
// import AuthContextProvider from "./context/authContext";

function App() {
  return (
    <BrowserRouter>
      {/* <AuthContextProvider> */}
      {/* <AppContextProvider> */}
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/detail/:id" element={<DetailPage />} />
          <Route path="/user/:type" element={<UserPage />} />
          {/* <Route path="/profile" element={<ProfilePage />} />
              
               */}
        </Routes>
      </div>
      {/* </AppContextProvider> */}
      {/* </AuthContextProvider> */}
    </BrowserRouter>
  );
}

export default App;
