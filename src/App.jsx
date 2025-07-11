import Index from "./Pages/Index";
import About from "./Pages/About";
import Projects from "./Pages/Projects";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Upcomingevents from "./Pages/Upcomingevents";
import Involve from "./Pages/Involve";
import Terms from "./Components/Homepage/Terms";
import Contact from "./Pages/Contact";
import Login from "./Components/Login";
import Signin from "./Components/Signin";
import Participationform from "./Components/Upcomingeventspage/Participationform";
import Involveform from "./Components/Involvepage/Involveform";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Index />}></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/Projects" element={<Projects />}></Route>
          <Route path="/Upcomingevents" element={<Upcomingevents />}></Route>
          <Route path="/Getinvolve" element={<Involve />}></Route>
          <Route path="/Contact" element={<Contact />}></Route>
          <Route path="/Terms&conditions" element={<Terms />}></Route>
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/Signin" element={<Signin />}></Route>
          <Route path="/Participation" element={<Participationform />}></Route>
          <Route path="/Involveform" element={<Involveform />}></Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
