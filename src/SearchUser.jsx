import React, { useState } from 'react';

const SearchUser = (props) => {

    const [userId,setUserId]=useState('');

    const handleAddUserDetails = async (e) => {
        e.preventDefault();

        const url = `capitapi/accounts/details/${userId}`;
        const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJtYXN1ZCIsImlzcyI6IkNhcGl0YSIsImV4cCI6MTc0NzMwMjE0NCwiaWF0IjoxNzE1NzY2MTQ0fQ.mK_7CBM6L9Zzt0aYHNB2JIaGNvTYzRel2omfLcd0wps';

        try {
            const response = await fetch(url, {
                method: 'GET',
            
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Accept': 'application/json',
                    
                }
            });
            const data = await response.json();
            props.addUserDetails(data);
            
        } catch (err) {
            console.log(err);
        }
    };


    
  return (
    <div>
        <form onSubmit={handleAddUserDetails}>
            <input type="text" name="userId"
            value={userId}
            onChange={(e)=>setUserId(e.target.value)}
            placeholder='Enter User Id' />

            <button type='submit'>Search</button>
        </form>
    </div>
  )
}

export default SearchUser;