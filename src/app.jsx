import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SearchProduct from './components/SearchProduct';
import AnalyzeProduct from './components/AnalyzeProduct';
import HomePage from './components/HomePage';
import AnalyzeByUrl from './components/AnalyzeByURL';
import About from './components/About';
function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/search" element={<SearchProduct />} />
      <Route path="/analyze" element={<AnalyzeProduct />} />
      <Route path="/analyzeByUrL" element={<AnalyzeByUrl />} />
      <Route path='/about' element={<About/>}></Route>
    </Routes>
  );
}
export default App;

