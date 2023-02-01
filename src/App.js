import React, { useState } from 'react';

import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = ((uName, uAge) => {
    // function 사용해서 바로 이전 상태의
    // snapshot을 가져올 수 있도록 구현해야 함. 이 부분 실수했으니 주의할 것
    setUsersList((prevUsersList) => {
      return [...prevUsersList, { id: Math.random().toString(), name: uName, age: uAge }];
    });
  });

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
