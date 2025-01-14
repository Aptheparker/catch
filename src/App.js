// imports
import { Routes, Route } from 'react-router-dom';

// pages
import StartPage from './pages/StartPage';
import Question1Page from './pages/Question1Page';
import Question2Page from './pages/Question2Page';
import Question3Page from './pages/Question3Page';
import Question4Page from './pages/Question4Page';
import Question5Page from './pages/Question5Page';
import Question6Page from './pages/Question6Page';
import Question7Page from './pages/Question7Page';
import Question8Page from './pages/Question8Page';
import Question9Page from './pages/Question9Page';
import Question10Page from './pages/Question10Page';
import Question11Page from './pages/Question11Page';
import Question12Page from './pages/Question12Page';
import Level from './data/level';
import { useState } from 'react';

function App() {
  const [curExp, setCurExp] = useState(0);
  return (
    <Level.Provider value={{ exp: curExp, setExp: setCurExp }}>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/q1" element={<Question1Page />} />
        <Route path="/q2" element={<Question2Page />} />
        <Route path="/q3" element={<Question3Page />} />
        <Route path="/q4" element={<Question4Page />} />
        <Route path="/q5" element={<Question5Page />} />
        <Route path="/q6" element={<Question6Page />} />
        <Route path="/q7" element={<Question7Page />} />
        <Route path="/q8" element={<Question8Page />} />
        <Route path="/q9" element={<Question9Page />} />
        <Route path="/q10" element={<Question10Page />} />
        <Route path="/q11" element={<Question11Page />} />
        <Route path="/q12" element={<Question12Page />} />
      </Routes>
    </Level.Provider>
  );
}

export default App;
