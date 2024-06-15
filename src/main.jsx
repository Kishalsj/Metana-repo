import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Quiz from './Quiz';
import Quiz2 from './Quiz2.jsx';
import Quiz3 from './Quiz3.jsx';
import Quiz4 from './Quiz4.jsx';
import Quiz5 from './Quiz5.jsx';
import Quiz6 from './Quiz6.jsx';
import Quiz7 from './Quiz7.jsx';
import Quiz8 from './Quiz8.jsx';
import Quiz9 from './Quiz9.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/quiz2" element={<Quiz2 />} />
        <Route path="/quiz3" element={<Quiz3 />} />
        <Route path="/quiz4" element={<Quiz4 />} />
        <Route path="/quiz5" element={<Quiz5 />} />
        <Route path="/quiz6" element={<Quiz6 />} />
        <Route path="/quiz7" element={<Quiz7 />} />
        <Route path="/quiz8" element={<Quiz8 />} />
        <Route path="/quiz9" element={<Quiz9 />} />
      </Routes>
    </Router>




  </React.StrictMode>,
)
