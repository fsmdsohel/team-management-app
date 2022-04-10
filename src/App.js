import React from "react";
import {Router} from "./screens";
import ThemeProvider from "./theme/ThemeProvider";
import {LogBox} from "react-native";

LogBox.ignoreLogs([
  "ViewPropTypes will be removed",
  "ColorPropType will be removed",
  "exported from 'deprecated-react-native-prop-types'.",
]);

const App = () => {
  return (
    <ThemeProvider>
      <Router />
    </ThemeProvider>
  );
};
export default App;
