import React, { useContext, useState, useEffect,createContext} from "react";
import {Auth,Hub} from 'aws-amplify';
import Loader from "../pages/Loader";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(undefined);

  const value = {
    user
  }

  const checkUserState= async ()=>{
    try{
      const data=await Auth.currentAuthenticatedUser();
      setUser(data);
    }catch(err){
      setUser(null);
    }
  };

  useEffect( ()=>{
     checkUserState();
  },[]); 

  useEffect(() => {
    const listener= async (data)=>{
      if(data.payload.event==='signIn' || data.payload.event==='signOut' || data.payload.event==='signUp' || data.payload.event==='tokenRefresh' || data.payload.event==='confirmSignUp'){
        await checkUserState();
      }
    };

    const hubListenerCancelToken=Hub.listen('auth',listener);
    return ()=> { hubListenerCancelToken() };
  }, []);

  if(user===undefined)
  {
    return <Loader/>
  }

  return (
    <AuthContext.Provider value={value}>
       {children}
    </AuthContext.Provider>
  )
}