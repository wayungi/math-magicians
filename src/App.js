import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './components/pages/homePage';
import CalculatorPage from './components/pages/calculatorPage';
import QuotesPage from './components/pages/quotesPage';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/calculator" element={<CalculatorPage />} />
      <Route path="/quote" element={<QuotesPage />} />
    </Routes>
  </BrowserRouter>
);

export default App;
