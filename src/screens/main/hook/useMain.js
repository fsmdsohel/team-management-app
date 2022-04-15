import {useState} from "react";

const useMain = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [tabBarVisibility, setTabBarVisibility] = useState(false);

  return {
    isLoading,
    setIsLoading,
    tabBarVisibility,
    setTabBarVisibility,
  };
};

export default useMain;
