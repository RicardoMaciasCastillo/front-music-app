import React, { useContext } from 'react'
import image from '../assets/2022476 (2).svg'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../auth/authContext';
import { types } from '../types/types';
import { Link } from "react-router-dom";
// import PlayCircleOutlineTwoToneIcon from '@mui/icons-material/PlayCircleOutlineTwoTone';
import LibraryMusicTwoToneIcon from '@mui/icons-material/LibraryMusicTwoTone';
import InfoTwoToneIcon from '@mui/icons-material/InfoTwoTone';
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';
import LogoutTwoToneIcon from '@mui/icons-material/LogoutTwoTone';


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
<nav className="navbar navbar-expand-lg navbar-dark bg-dark ">

  
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div  className="collapse navbar-collapse" id="navbarNavDropdown">
    <ul className="navbar-nav mx-3">

      {/* <li className="nav-item active">
        <Link to="/reproductor" className="nav-link"><PlayCircleOutlineTwoToneIcon/> Player |</Link> 
      </li>  */}
      <li  className="nav-item">
        <Link to="/shop" className="nav-link"><LibraryMusicTwoToneIcon /> Artists |</Link>
      </li>
      <li  className="nav-item">
        <Link to="/shop" className="nav-link"><ShoppingCartTwoToneIcon />  Shop |</Link>
      </li>
      <li  className="nav-item">
        <Link to="/about" className="nav-link"><InfoTwoToneIcon /> About </Link>
      </li>



    </ul>
  </div>
</nav>
    <div className='nav'>

   

        
        <img src={image} alt="vinil"></img>
        <h1>myMusic</h1>        
    </div>
    
    <button
       onClick={handleLogout}
        className="btn btn-dark logout"
     
        >
          <LogoutTwoToneIcon />
            Logout
        </button>
        <span className='loggedUser'> {user.name} </span>

  
        <hr />
        </>
  )
}

export default Navbar