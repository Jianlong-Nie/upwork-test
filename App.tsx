import React from "react";
import { StatusBar } from "react-native";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import HomePage from "./src/pages/HomePage";

let theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#31bb6b",
    accent: "yellow",
  },
};

const App = () => {
  return (
    <PaperProvider theme={theme}>
      <StatusBar barStyle={"light-content"} translucent={true} backgroundColor='transparent' />
      <HomePage />
    </PaperProvider>
  );
};

export default App;
