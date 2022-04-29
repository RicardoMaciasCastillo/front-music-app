import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";

import { Login } from '../components/Login';
import { SongsRoutes } from './SongsRoutes';

export const AppRouter = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/*" element={<SongsRoutes />} />

        </Routes>
      </BrowserRouter>,
    </div>
  )
}
