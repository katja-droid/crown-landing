import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home'
import Layout from './Layout';
import './App.css'
import ReadMore from './ReadMore';
import Thankyoupage from './Thankyoupage';
import TermsAndConditions from './TermsAndConditions';

const App = () => {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="readmore" element={<ReadMore />} />
          
        <Route path="termsandconditions" element={<TermsAndConditions/>} />
        </Route>
        <Route path="thankyoupage" element={<Thankyoupage />} />
      </Routes>
    </Router>
  );
};

export default App;
