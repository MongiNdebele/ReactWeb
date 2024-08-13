import React, { createContext, useState, useContext, ReactNode } from 'react';

interface AuthContextType {
  userId: string | null;
  setUserId: (id: string | null) => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [userId, setUserId] = useState<string | null>(null);

  const isAuthenticated = userId !== null;

  return (
    <AuthContext.Provider value={{ userId, setUserId, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
