import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Registration from './pages/register/Registration';
import Login from './pages/login/Login';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Registration />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
