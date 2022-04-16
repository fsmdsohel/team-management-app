import React from "react";

const Authentication = React.createContext({
  finishLogin: () => undefined,
  finishSignUp: () => undefined,
});

export const useAuthentication = () => React.useContext(Authentication);

export const AuthenticationContextProvider = Authentication.Provider;
