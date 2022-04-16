import React from "react";
import {Router} from "./screens";
import ThemeProvider from "./theme/ThemeProvider";
import {LogBox} from "react-native";
import MainProvider from "./screens/main/MainProvider";

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
  "exported from 'deprecated-react-native-prop-types'.",
]);

const App = () => {
  return (
    <ThemeProvider>
      <MainProvider>
        <Router />
      </MainProvider>
    </ThemeProvider>
  );
};
export default App;
