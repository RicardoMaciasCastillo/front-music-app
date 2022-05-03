import React, { useContext } from 'react'
import image from '../assets/2022476 (2).svg'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../auth/authContext';
import { types } from '../types/types';


const Navbar = () => {

  const {user,dispatch} = useContext(AuthContext)

  const navigate = useNavigate()
  const handleLogout = () => {
    
    const action =  {
        type: types.logout,
        
      }
      dispatch(action)
      navigate('/login')
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
        <span className='loggedUser'> {user.name} </span>

  
        <hr />
        </>
  )
}

export default Navbar