// UserContext.tsx
import React, { createContext, useContext, useState, ReactNode } from "react";

// Define the shape of the context's value
interface UserContextType {
  username: string;
  setUsername: (username: string) => void;
}

// Create the context with a default value
// Specify the context type and provide an initial value that matches the type
const UserContext = createContext<UserContextType | undefined>(undefined);

interface UserProviderProps {
  children: ReactNode;
}

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [username, setUsername] = useState<string>("");

  return (
    <UserContext.Provider value={{ username, setUsername }}>
      {children}
    </UserContext.Provider>
  );
};

// Update useUser to handle the case where context might be undefined
export const useUser = (): UserContextType => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
