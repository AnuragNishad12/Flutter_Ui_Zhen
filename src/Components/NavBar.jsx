import React from 'react'
import github from '../image/github.png'
import twitter from '../image/twitter.png'
import { useNavigate } from 'react-router-dom';

import "../App.css"

function NavBar() {
  const navigate = useNavigate();

  const goToAbout = () => {
    navigate('/Docs');
  };

  const goToHome=()=>{
   navigate('/')
  }

 

  const handleClick = () => {
    window.location.href = 'https://github.com/AnuragNishad12';
  };

  const handleTwitter=()=>{
    window.location.href='https://x.com/ReyedgeM';
  }



  return (
    <div>
      <div className='Box'>
        <div className='body1'>
           <text className='flu' onClick={goToHome}>Flutter/Ui</text>
           <text className='docs' onClick={goToAbout}>Docs</text>
           <text div className='docs' onClick={handleClick}>GITHUB</text>
        </div>
         <div className='body2'>
          <input type='text' placeholder='Search Documentation'></input>
          <img src={github} alt='' onClick={handleClick}/>
          <img src={twitter} alt='' onClick={handleTwitter}/>
         </div>
        </div>
    </div>
  )
}

export default NavBar