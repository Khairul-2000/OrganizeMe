import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Signin from "./components/Signin";
import UserContext from "./userContext";
import { useState } from "react";
import Register from "./components/Register";

function App() {
  const user = useState(null);
  return (
    <div>
      <BrowserRouter>
        <UserContext.Provider value={user}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Register />} />
          </Routes>
        </UserContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
