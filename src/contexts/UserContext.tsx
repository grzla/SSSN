/* might use this to pass user prop to other components */

import React, { createContext, useContext, useState } from "react";

// Create a context with a default empty value
const UserContext = createContext(null);

// Create a provider component
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

// Create a custom hook for using the user context
export const useUser = () => useContext(UserContext);
