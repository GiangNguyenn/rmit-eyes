import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WithNav from './components/navigation/WithNav';
import WithoutNav from './components/navigation/WithoutNav';
import Registration from './pages/register/RegistrationScreen';
import Login from './pages/login/LoginScreen';
import HomeScreen from './pages/home/HomeScreen';
import UserList from './pages/user_list/UserListScreen';
import UserRequest from './pages/user_request/UserRequestScreen';
import StatisticsScreen from './pages/statistics/StatisticsScreen';
import CheckInListing from './components/checkin/CheckinListing';

function App() {
  return (
    <div>
      <Routes>
        <Route element={<WithoutNav />}>
          <Route path="/" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
        </Route>
        <Route element={<WithNav />}>
          <Route path="/dashboard/admin" element={<HomeScreen />} />
          <Route path="/user_request" element={<UserRequest />} />
          <Route path="/user_list" element={<UserList />} />
          <Route path="/checkin_list" element={<CheckInListing />} />
          <Route path="/statistics" element={<StatisticsScreen />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
