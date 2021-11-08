import React from "react";
import { StyleProp, TextStyle, Text as RNText } from "react-native";

interface TextProps {
  style?: StyleProp<TextStyle>;
  text: string;
}

function Text({ style, text }: TextProps): React.ReactElement {
  return <RNText style={style}>{text}</RNText>;
}

export default Text;
