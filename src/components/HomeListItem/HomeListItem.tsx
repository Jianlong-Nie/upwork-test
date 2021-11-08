import React from "react";
import { TouchableOpacity } from "react-native";
import Text from "../Shared/Text/Text";
import { t, color } from "react-native-tailwindcss";
import Icon from "react-native-vector-icons/AntDesign";
import CircleIcon from "react-native-vector-icons/Feather";
import { Swipeable } from "react-native-gesture-handler";
import { HomeListDataItemProps } from "../../model/useHomeData";
import firestore from "@react-native-firebase/firestore";
interface HomeListItemProps {
  item: HomeListDataItemProps;
  selected: HomeListDataItemProps[];
  onSelected: (selected: HomeListDataItemProps[]) => void;
}

function HomeListItem({
  item,
  item: { name, count, unit, id },
  selected,
  onSelected,
}: HomeListItemProps): React.ReactElement {
  const isSelected = selected.findIndex((data) => id === data.id) >= 0;
  const renderLeftActions = () => {
    return (
      <TouchableOpacity
        style={[t.bgRed900, t.w16, t.justifyCenter, t.itemsCenter]}
        onPress={() => {
          firestore()
            .collection("Shopping")
            .doc(id)
            .delete()
            .then(() => {
              console.log("User deleted!");
            });
        }}>
        <Text text='Delete' style={[t.textWhite, t.textLg]} />
      </TouchableOpacity>
    );
  };
  return (
    <Swipeable renderRightActions={renderLeftActions} leftThreshold={1000}>
      <TouchableOpacity
        style={[t.pY3, t.flexRow, t.itemsCenter]}
        onPress={() => {
          if (!isSelected) {
            onSelected([...selected, item]);
          } else {
            const tempArray: HomeListDataItemProps[] = selected.filter((element) => item !== element);
            onSelected(tempArray);
          }
        }}>
        {isSelected ? (
          <Icon name='checkcircle' color={color.primary} size={30} />
        ) : (
          <CircleIcon name='circle' size={30} color={color.gray500} />
        )}
        <Text text={`${count} ${unit} ${name}`} style={[t.textLg, t.mL2]} />
      </TouchableOpacity>
    </Swipeable>
  );
}

export default HomeListItem;
