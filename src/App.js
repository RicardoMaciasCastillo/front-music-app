import { useEffect, useReducer } from "react";
import { AuthContext } from './auth/authContext'
import './App.css';
import { authReducer } from "./auth/authReducer";
// import { Reproductor } from './components/Reproductor';
import { AppRouter } from './Routers/AppRouter';

const init = () => {
  return JSON.parse( localStorage.getItem('user') ) || {logged: false }
  
}

function App() {

  const [user, dispatch] = useReducer(authReducer, {}, init)

  useEffect(() => {
    if(!user) return;
    localStorage.setItem('user', JSON.stringify(user)) 
  }, [user])
  

  return (
    <>
    <AuthContext.Provider value={{
      user,
      dispatch
    }}>

    <AppRouter />

    </AuthContext.Provider>
  
    </>
  );
}

export default App;
