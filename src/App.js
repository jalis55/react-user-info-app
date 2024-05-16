import logo from './logo.svg';
import './App.css';
import SearchUser from './SearchUser';
import { useState } from 'react';
import UserDetails from './UserDetails';

function App() {

  const [userDetails,setUserDetails]=useState('');

  const addUserDetails=(userData)=>{
    setUserDetails(userData);
    console.log(userData);
  }
  
  return (
    <div className="App">
    <SearchUser addUserDetails={addUserDetails}/>
    {
      userDetails && <UserDetails userDetails={userDetails}/>
    }
    

    </div>
  );
}

export default App;
