import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import CustomerListPage from './components/CustomerListPage';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<LoginPage onLogin={handleLogin} />} />
          {isLoggedIn && <Route path="/customers" element={<CustomerListPage />} />}
        </Routes>
      </div>
    </Router>
  );
};

export default App;