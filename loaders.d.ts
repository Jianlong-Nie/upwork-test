import { ViewStyle, TextStyle, ColorValue } from "react-native";

declare module "react-native-tailwindcss" {
  import {
    TailwindColors as DefaultTailwindColors,
    TailwindStyles as DefaultTailwindStyles,
  } from "react-native-tailwindcss";

  interface CustomColors {
    primary: ColorValue;
    bgPrimary: ViewStyle;
    textPrimary: TextStyle;
  }

  export interface TailwindStyles extends DefaultTailwindStyles, CustomColors {
    text16: TextStyle;
  }
  export interface TailwindColors extends DefaultTailwindColors, CustomColors {}
}
