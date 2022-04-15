import {useContext} from "react";
import {MainContext} from "../MainProvider";

const useNavigationContext = () => {
  return useContext(MainContext);
};

export default useNavigationContext;
