import "./App.css";
import { Routes, Route } from "react-router-dom";
import Signin from "./components/Signin";
import Home from "./Home/Home";
import Intro from "./Intro/Intro";
import Register from "./components/Register";
import Contact from "./components/Contact";
import NotFound from "./components/NotFound";

function App() {
  return (
    <div className="relative flex min-h-screen w-full flex-row">
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/home/:id" element={<Home />} />
        <Route path="/contact-sales" element={<Contact />} />

        <Route path="/signin" element={<Signin />} />
        <Route path="/newregister" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
