import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const ColorCounter = ({ color }) => {
  return (
    <View>
      <Text>{color}</Text>
      <Button title={`INCREASE ${color}`} />
      <Button title={`DECREASE ${color}`} />
    </View>
  );
};

export default ColorCounter;
