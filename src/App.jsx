import Index from "./Pages/Index";
import About from "./Pages/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Index />}></Route>
          <Route path="/About" element={<About />}></Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
