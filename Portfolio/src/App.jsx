import React from 'react';
import {HashRouter, Routes, Route} from 'react-router-dom'
import HomePage from './pages/homepage'
import Resume from './pages/resume'

function App() {

  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/resume" element={<Resume />}/>

  
        </Routes>
      </HashRouter>

    </>
  )
}

export default App
