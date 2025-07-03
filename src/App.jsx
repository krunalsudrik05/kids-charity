import Index from "./Pages/Index";
import About from "./Pages/About";
import Projects from "./Pages/Projects";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Upcomingevents from "./Pages/Upcomingevents";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Index />}></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/Projects" element={<Projects />}></Route>
          <Route path="/Upcomingevents" element={<Upcomingevents />}></Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
