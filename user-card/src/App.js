import './App.css';
import React, { useState }  from 'react';
 

function App() {

  const [user,setUser] = useState([]);

  const getdata = async() =>{
     const userData = await fetch('https://reqres.in/api/users?page=1');
     const responsData = await userData.json();
     console.log(1,responsData);
     setUser(responsData.data);
  }

  return (
    <div className="App">
      <div className='header'>
      <h1> User Detalis</h1>
      <button onClick={getdata}>Get Data</button>
      </div>
      <div className='user'>
         { 
         user.map( ({email,first_name,last_name,avatar}) => {
         return( 
          
            <div className='myphoto'>
              <div className='name'>Name : {first_name}{last_name}<br/>Email    : {email}</div>
              <img src={avatar} alt='' ></img>
              </div>
               ) 
            } )
         }
         </div>
         
    </div>
  );
}

export default App;
