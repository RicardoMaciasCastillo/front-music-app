import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";

import { Login } from '../components/Login';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import { SongsRoutes } from './SongsRoutes';

export const AppRouter = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={
          <PublicRoute>

            <Login />


          </PublicRoute>
          
          } />

          <Route path="/*" element={
            <PrivateRoute>
            
             
                <SongsRoutes />
            
            </PrivateRoute>
            } />


        </Routes>
      </BrowserRouter>,
    </div>
  )
}
