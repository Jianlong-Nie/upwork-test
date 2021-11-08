import { useState } from "react";
import { createModel } from "hox";
import firestore from "@react-native-firebase/firestore";
import useAppLoading from "./useAppLoading";

export interface HomeListDataItemProps {
  name: string;
  count: number;
  unit: string;
  id: string;
}
interface HomeDataProps {
  datas: HomeListDataItemProps[];
  selected: HomeListDataItemProps[];
}
function useHomeData() {
  const [homeData, setHomeData] = useState<HomeDataProps>({
    datas: [],
    selected: [],
  });

  const { datas, selected } = homeData;
  const setSelected = (selected: HomeListDataItemProps[]) => {
    setHomeData({
      ...homeData,
      selected,
    });
  };
  const getData = () => {
    firestore()
      .collection("Shopping")
      .onSnapshot((querySnapshot) => {
        const items: HomeListDataItemProps[] = [];
        querySnapshot.forEach((documentSnapshot) => {
          let item = documentSnapshot.data() as HomeListDataItemProps;
          items.push(item);
        });
        setHomeData({ ...homeData, datas: items });
      });
  };
  return {
    datas,
    selected,
    getData,
    setHomeData,
    setSelected,
  };
}

export default createModel(useHomeData);
