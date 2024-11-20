import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Signin from "./components/Signin";
import UserContext from "./userContext";
import { useContext, useState } from "react";
import Register from "./components/Register";
import { ModeContext } from "./context/modeContext";

function App() {
  const user = useState(null);
  const { mode } = useContext(ModeContext);
  return (
    <div className={`${mode} h-full`}>
      <div className="flex h-full flex-col bg-white text-black dark:bg-black dark:opacity-95">
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
    </div>
  );
}

export default App;
