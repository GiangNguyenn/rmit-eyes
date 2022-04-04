import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Registration from './pages/register/Registration';
import Login from './pages/login/Login';
import AdminDashBoard from "./components/AdminDashBoardComponent";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Registration />} />
          <Route path='/dashboard/admin/:id' element={<AdminDashBoard/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
