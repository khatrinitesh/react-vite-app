import React from 'react'
// import CustomApp from './7/app';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import List from './12/list';
import Detail from './11/detail';

function App() {
  

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<List/>}/>
        <Route path={`/list/:id`} element={<Detail/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
