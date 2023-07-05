import React, { createContext, useReducer, ReactNode } from "react";
import { userReducer, UserState, UserAction } from "../reducers/UserReducer"; // import from the correct path

const initialState: UserState = {
  user: null,
  users: [],
  isLoading: false,
  error: null,
};

export const UserContext = createContext<{
  state: UserState;
  dispatch: React.Dispatch<UserAction>;
}>({
  state: initialState,
  dispatch: () => null,
});

type UserProviderProps = {
  children: ReactNode;
};

export const UserProvider = ({ children }: UserProviderProps) => {
  const [state, dispatch] = useReducer(userReducer, initialState);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};
