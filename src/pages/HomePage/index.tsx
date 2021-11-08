import React, { useCallback, useEffect, useState } from "react";
import { SafeAreaView, View } from "react-native";
import { t } from "react-native-tailwindcss";
import HomeHeader from "../../components/HomeHeader/HomeHeader";
import HomeListItem from "../../components/HomeListItem/HomeListItem";
import Text from "../../components/Shared/Text/Text";
import { FlatList } from "react-native-gesture-handler";
import firestore from "@react-native-firebase/firestore";
import { ActivityIndicator } from "react-native";
import useAppLoading from "../../model/useAppLoading";
import useHomeData from "../../model/useHomeData";
import { massAdd, massDelete } from "../../utils/firebaseTool";

function HomePage(): React.ReactElement {
  const { datas, selected, getData, setHomeData, setSelected } = useHomeData();
  const { loading } = useAppLoading();
  //   massAdd();
  useEffect(() => {
    const subscriber = getData;
    subscriber();
    // Unsubscribe from events when no longer in use
    return () => subscriber();
  }, []);

  if (loading) {
    return <ActivityIndicator />;
  }

  return (
    <View style={[t.wFull, t.hFull, t.bgGray200]}>
      <SafeAreaView style={[t.bgPrimary]}>
        <HomeHeader />
      </SafeAreaView>
      <FlatList
        data={datas}
        style={[t.roundedLg, t.border, t.mX6, t.mY6, t.bgWhite, t.borderGray200]}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={<Text text='All ingredient' style={[t.fontBold, t.textLg]} />}
        contentContainerStyle={[t.pX4, t.pT6, t.pB16]}
        renderItem={({ item }) => {
          return <HomeListItem item={item} selected={selected} onSelected={setSelected} />;
        }}
      />
    </View>
  );
}

export default HomePage;
