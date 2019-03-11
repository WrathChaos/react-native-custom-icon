import React from "react";
import { View } from "react-native";
import { createIconSetFromIcoMoon } from "react-native-vector-icons";

const MyIcon = props => {
  const Icomoon = createIconSetFromIcoMoon(props.config || IcomoonConfig);
  return (
    <View>
      <Icomoon color={props.color} size={props.size} name={props.name} />
    </View>
  );
};

export default MyIcon;
