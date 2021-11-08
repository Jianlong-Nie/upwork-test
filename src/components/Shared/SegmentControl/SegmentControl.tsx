import React, { useState } from "react";
import { View, TouchableOpacity, StyleProp, TextStyle } from "react-native";
import { t } from "react-native-tailwindcss";
import Text from "../Text/Text";

interface SegmentControlProps {
  items: string[];
  defaultActive?: number;
  style?: StyleProp<TextStyle>;
}

function SegmentControl({ items, defaultActive = 0, style }: SegmentControlProps): React.ReactElement {
  const [currentIndex, setCurrentIndex] = useState(defaultActive);
  return (
    <View style={[t.flexRow, t.justifyAround, style]}>
      {items.map((item, index) => {
        return (
          <View style={[t.flex1]} key={`${item}${index}`}>
            {index === currentIndex ? (
              <TouchableOpacity
                style={[t.justifyCenter, t.bgWhite, t.pY3, t.roundedLg]}
                activeOpacity={1.0}
                onPress={() => {
                  setCurrentIndex(index);
                }}>
                <Text text={item} style={[t.textCenter, t.textPrimary, t.fontBold]} />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={[t.justifyCenter, t.bgTransparent, t.pY3, t.roundedLg]}
                activeOpacity={1.0}
                onPress={() => {
                  setCurrentIndex(index);
                }}>
                <Text text={item} style={[t.textCenter, t.textWhite]} />
              </TouchableOpacity>
            )}
          </View>
        );
      })}
    </View>
  );
}

export default SegmentControl;
