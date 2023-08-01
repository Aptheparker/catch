// imports
import { Routes, Route } from "react-router-dom";

// pages
import StartPage from "./pages/StartPage";
import Question1Page from "./pages/Question1Page";
import CorrectPage from "./pages/GradePages/CorrectPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<StartPage />} />
      <Route path="/q1" element={<Question1Page />} />
      <Route path="/ans" element={<CorrectPage />} />
    </Routes>
  );
}

export default App;
