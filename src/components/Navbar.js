import React from 'react'
import { useNavigate } from 'react-router-dom';
import image from '../assets/2022476 (2).svg'


const Navbar = () => {
  const navigate = useNavigate()
  const handleLogout = () => {
      navigate('/login',{
          replace:true
      })
  }

  return (
      <>
    <div className='nav'>
        
        <img src={image} alt="vinil"></img>
        <h1>myMusic</h1>        
    </div>
    
    <button
       onClick={handleLogout}
        className="btn btn-dark logout"
     
        >
            Logout
        </button>

  
        <hr />
        </>
  )
}

export default Navbar