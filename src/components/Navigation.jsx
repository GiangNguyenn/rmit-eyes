import React from 'react';
import { Link } from 'react-router-dom';
const navbar = () => {
  return (
    <div>
      <li>
        <Link to="/dashboard/admin/:id">Home</Link>
      </li>
      <li>
        <Link to="/user_request">User Request</Link>
      </li>
      <li>
        <Link to="/user_list">User List</Link>
      </li>
    </div>
  );
};
export default navbar;
