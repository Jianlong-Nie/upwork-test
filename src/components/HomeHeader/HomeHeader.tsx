import React from "react";
import { View } from "react-native";
import { t } from "react-native-tailwindcss";
import SegmentControl from "../Shared/SegmentControl/SegmentControl";
import Text from "../Shared/Text/Text";

const items = ["By recipe", "All ingredient"];

function HomeHeader(): React.ReactElement {
  return (
    <View style={[t.bgPrimary, t.pX6, t.pT16, t.pB6]}>
      <Text text='Ingredient' style={[t.textWhite, t.fontBold, t.text3xl]} />
      <SegmentControl items={items} style={t.mT6} defaultActive={1} />
    </View>
  );
}

export default HomeHeader;
