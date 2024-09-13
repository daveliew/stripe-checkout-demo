import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home.js';
import Checkout from './components/Checkout.js';
import SubscriptionManagement from './components/SubscriptionManagement.js';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/checkout" element={<Checkout />} />
          <Route path="/manage-subscription" element={<SubscriptionManagement />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
