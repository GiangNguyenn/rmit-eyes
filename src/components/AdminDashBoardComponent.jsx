import React, { useState, useEffect } from 'react';
import axios from '../http-common';
import Camera from './Camera';
import { getUserLogged } from '../helpers/userHelper';
import UserDetail from './detail/UserDetail';
import UserDescriptionDetail from './detail/UserDescriptionDetail';

function AdminDashBoardComponent() {
  const id = getUserLogged();
  const [user, setUser] = useState({});
  const [userList, setUserList] = useState([]);
  const [detectedUser, setDetectedUser] = useState({});
  useEffect(async () => {
    if (id) {
      const user = await axios.get('users/findUser', {
        params: {
          user_id: id,
        },
      });
      if (user) {
        setUser(user.data);
      }
    }
    const userList = await axios.get('users/');
    if (userList) {
      setUserList(userList.data);
    }
  }, [id]);
  const findDetectedUser = (match) => {
    if (match && match.length) {
      const sid = match[0]._label.split(' ')[1];
      setDetectedUser(userList.find((user) => {
        return user.sid === sid
      }));
    }
  };
  return (
    userList && (
      <div
        style={{
          display: 'inline-flex',
          flexDirection: 'row',
          width: '100%',
          justifyContent: 'space-around',
        }}
      >
        <Camera users={userList} findDetectedUser={findDetectedUser} />
        {/*<div> Bee vo </div>*/}
        {detectedUser ? (
          <UserDescriptionDetail user={detectedUser} />
        ) : (
          <div style={{ width: '400px' }}> </div>
        )}
      </div>
    )
  );
}

export default AdminDashBoardComponent;
