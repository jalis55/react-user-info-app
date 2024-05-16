import logo from './logo.svg';
import './App.css';
import SearchUser from './SearchUser';
import { useRef, useState } from 'react';
import UserDetails from './UserDetails';
import UserDetailsDownload from './UserDetailsDownload';

function App() {

  const [userDetails,setUserDetails]=useState('');

  const addUserDetails=(userData)=>{
    setUserDetails(userData);
  }
  
  
  return (
    <div className="App">
    <SearchUser addUserDetails={addUserDetails}/>
    {userDetails && <UserDetailsDownload userDetails={userDetails}/> }
    
    </div>
  );
}

export default App;


