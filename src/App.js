import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WithNav from './components/navigation/WithNav';
import WithoutNav from './components/navigation/WithoutNav';
import Registration from './pages/register/Registration';
import Login from './pages/login/Login';
import AdminDashBoard from './components/AdminDashBoardComponent';
import UserList from './pages/user_list/UserList';
import UserRequest from './pages/user_request/UserRequest';

function App() {
  return (
    <div>
      <Routes>
        <Route element={<WithoutNav />}>
          <Route path="/" element={<Login />} />
        </Route>
        <Route element={<WithNav />}>
          <Route path="/dashboard/admin/:id" element={<AdminDashBoard />} />
          <Route path="/user_request" element={<UserRequest />} />
          <Route path="/user_list" element={<UserList />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
