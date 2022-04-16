import React, {createContext} from "react";
import useMainContext from "./hook/useMain";

export const MainContext = createContext();

const MainProvider = ({children}) => {
  const navigation = useMainContext();
  return (
    <MainContext.Provider value={navigation}>{children}</MainContext.Provider>
  );
};

export default MainProvider;
