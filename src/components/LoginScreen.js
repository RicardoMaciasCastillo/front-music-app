import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../auth/authContext';
import { types } from "../types/types";

export const LoginScreen = () => {
    const {dispatch} = useContext(AuthContext)
    let navigate = useNavigate();
    const handleRouteChange = () => {

        const action =  {
          type: types.login,
          payload: { name: 'Ricardo',}
        }
        dispatch(action)
        navigate('/shop',{
          replace:true
        });
    }

  return (
    <div  className="container-log ">
     {/* <div className="row w-100 align-items-center">
     <div className="col text-center">
            <button 
            onClick={handleRouteChange}
            className="btn btn-dark justify-content-center">Ingresar</button>
            
        </div>
            </div> */}
    <div className='vh-100 align-items-center justify-content-center'>
    <div className='my-5'>

    
<form>
    <h1 className="h3 mb-3 fw-normal text-center fw-bolder">Log in.</h1>

    <div className="form-floating">
      <input type="email" className="form-control" id="emailInput" placeholder="name@example.com"/>
      <label htmlFor="floatingInput">Email</label>
    </div>
    <div className="form-floating">
      <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
      <label htmlFor="floatingPassword">Password</label>
    </div>

    <div className="checkbox mb-3">
      <label>
        <input type="checkbox" value="remember-me"/> Remember me
      </label>
    </div>
    <button 
     onClick={handleRouteChange}
    className="w-100 btn btn-lg btn-dark" type="submit">Log in</button>

            <br />
    <Link to="/signin"><p><br></br>Please create a personal account</p></Link>
    <p className="mt-5 mb-3 text-muted">Rick M.C. Music ©</p>
  </form>
  </div>
  </div>
    </div>
  )
}
