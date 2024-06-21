import React, { createContext, useContext, useReducer, useState } from 'react';

const UserContext = createContext();

const userReducer = (state, action) => {
  switch (action.type) {
    case 'SET_USER':
      return { ...state, user: action.payload };
    default:
      return state;
  }
};

const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, { user: null });
  
  const setUser = (user) => {
    dispatch({ type: 'SET_USER', payload: user });
  };
  console.log(currUser);

  return (
    <UserContext.Provider value={{ user: state.user, setUser, }}>
      {children}
    </UserContext.Provider>
  );
};

const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};

export { UserProvider, useUser };
