import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './components/LoginPage'; // 正しいパスを確認
import CustomerListPage from './components/CustomerListPage';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };
  console.log("Rendering App component");
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage onLogin={handleLogin} />} />
        {isLoggedIn && <Route path="/customers" element={<CustomerListPage />} />}
      </Routes>
    </Router>
  );
};

export default App;