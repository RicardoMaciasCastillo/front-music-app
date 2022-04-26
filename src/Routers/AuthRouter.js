import React from 'react'
import { useNavigate } from 'react-router-dom';

export const AuthRouter = () => {
    let navigate = useNavigate();
    const handleRouteChange = () => {
    navigate('/reproductor');
    }

  return (
    <div  className="container-fluid h-100">
     <div className="row w-100 align-items-center">
     <div className="col text-center">
            <button 
            onClick={handleRouteChange}
            className="btn btn-dark justify-content-center">Ingresar</button>
            
        </div>
            </div>

    </div>
  )
}
