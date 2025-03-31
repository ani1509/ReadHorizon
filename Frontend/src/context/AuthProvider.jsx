import React, { createContext, useContext, useState } from "react";

export const AuthContext = createContext(); // create a context for auth
export default function AuthProvider({ children }) {  // in children other components are passed such that navbar, app.jsx, banner, etc. can access the auth context
  const initialAuthUser = localStorage.getItem("Users"); // get the user from local storage
  const [authUser, setAuthUser] = useState(
    initialAuthUser ? JSON.parse(initialAuthUser) : undefined
  );
  return (
    // must be return in array form such that we can use it in other components
    <AuthContext.Provider value={[authUser, setAuthUser]}>
      {children}
    </AuthContext.Provider>
  );
}

// below we created a custom hook to use the auth context in other components
export const useAuth = () => useContext(AuthContext);
