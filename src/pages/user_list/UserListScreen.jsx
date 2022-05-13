import React from 'react';
import UsersGridComponent from '../../components/users/UsersGridComponent';

function UserListScreen() {
  return (
    <div>
      <UsersGridComponent approve={false} />
    </div>
  );
}

export default UserListScreen;
