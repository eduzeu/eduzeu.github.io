// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './component/mainPage';
import Experience from './component/experience';
import Projects from './component/projects';
import Resume from './component/resume';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />}/>
        <Route path="/experience" element={<Experience/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/about" element={<Resume/>} /> 
      </Routes>
    </Router>
  );
}

export default App