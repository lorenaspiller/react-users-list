import React, {useState} from 'react';
import AddUser from './components/Users/AddUser';
// import styled from 'styled-components';
import UsersList from './components/Users/UsersList';




function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      return[...prevUsersList, {id: Math.random().toString(), name: uName, age: uAge}];
    });
  };
  
  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      {usersList.length > 0 && <UsersList users={usersList} />}
    </div>
  );
}

export default App;

