import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';

import Registration from './pages/register/Registration';
import Login from './pages/login/Login';
import AdminDashBoard from './components/AdminDashBoardComponent';
import UserList from './pages/user_list/UserList';
import UserRequest from './pages/user_request/UserRequest';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/dashboard/admin/:id" element={<AdminDashBoard />} />
        <Route path="/user_list" element={<UserList />} />
        <Route path="/user_request" element={<UserRequest />} />
      </Routes>
    </div>
  );
}

export default App;
