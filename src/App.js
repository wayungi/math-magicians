import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './components/pages/homePage';
import CalculatorPage from './components/pages/calculatorPage';
import QuotesPage from './components/pages/quotesPage';
import Layout from './components/layouts/layout';
import './components/calculator.css';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/calculator" element={<CalculatorPage />} />
        <Route path="/quote" element={<QuotesPage />} />
      </Routes>
    </Layout>
  </BrowserRouter>
);

export default App;
