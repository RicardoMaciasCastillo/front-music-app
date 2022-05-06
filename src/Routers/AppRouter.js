import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import { LoginScreen } from '../components/LoginScreen';

import { SignIn } from '../components/SignIn';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import { SongsRoutes } from './SongsRoutes';

export const AppRouter = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/signin" element={
          <PublicRoute>

            <SignIn />
            


          </PublicRoute>
          
          } />
          <Route path='/login' element={
            <LoginScreen />
          }
          />

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
