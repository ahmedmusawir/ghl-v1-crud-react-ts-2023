import React, { createContext, useReducer, ReactNode } from "react";
import {
  contactReducer,
  ContactState,
  ContactAction,
} from "../reducers/ContactReducer"; // import from the correct path

const initialState: ContactState = {
  contact: null,
  contacts: [],
  isLoading: false,
  error: null,
};

export const ContactContext = createContext<{
  state: ContactState;
  dispatch: React.Dispatch<ContactAction>;
}>({
  state: initialState,
  dispatch: () => null,
});

type ContactProviderProps = {
  children: ReactNode;
};

export const ContactProvider = ({ children }: ContactProviderProps) => {
  const [state, dispatch] = useReducer(contactReducer, initialState);

  return (
    <ContactContext.Provider value={{ state, dispatch }}>
      {children}
    </ContactContext.Provider>
  );
};
