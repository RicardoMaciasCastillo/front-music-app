import React from 'react'
import { useNavigate } from 'react-router-dom';

export const AuthRouter = () => {
    let navigate = useNavigate();
    const handleRouteChange = () => {
    navigate('/shop');
    }

  return (
    <div  className="container">
     {/* <div className="row w-100 align-items-center">
     <div className="col text-center">
            <button 
            onClick={handleRouteChange}
            className="btn btn-dark justify-content-center">Ingresar</button>
            
        </div>
            </div> */}
<form>
    <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

    <div className="form-floating">
      <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
      <label for="floatingInput">Email address</label>
    </div>
    <div className="form-floating">
      <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
      <label for="floatingPassword">Password</label>
    </div>

    <div className="checkbox mb-3">
      <label>
        <input type="checkbox" value="remember-me"/> Remember me
      </label>
    </div>
    <button 
     onClick={handleRouteChange}
    className="w-100 btn btn-lg btn-dark" type="submit">Sign in</button>
    <p className="mt-5 mb-3 text-muted">Rick M.C. Music ©</p>
  </form>
    </div>
  )
}
