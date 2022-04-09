import React from "react";

const LoginContext = React.createContext({
  finishLogin: () => undefined,
  finishSignUp: () => undefined,
});

export const useLoginContext = () => React.useContext(LoginContext);

export const LoginContextProvider = LoginContext.Provider;
