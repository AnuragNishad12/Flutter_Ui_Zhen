import React from 'react'
import '../App.css'
import github from '../image/github.png'
import { useNavigate } from 'react-router-dom';

function Middle() {
  const navigate = useNavigate();

  const goToAbout = () => {
    navigate('/Docs');
  };



  return (
    <div className='middle'>
    <div className='container'>
      <div className='box2'>
        <h1>Build Your Flutter Project</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Suscipit a provident dolores non quas, itaque nemo quaerat nihil debitis error?</p>
        <div className='button'>
          <button onClick={goToAbout}>Get Started</button>
          <button className='btnGithub'>
  <img src={github} alt="Github Logo" />
  Github
</button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Middle
