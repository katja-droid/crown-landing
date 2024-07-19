import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home'
import Layout from './Layout';
import './App.css'
import ReadMore from './ReadMore';
const App = () => {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="readmore" element={<ReadMore />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
