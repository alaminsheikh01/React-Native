import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const ColorCounter = ({ color, onIncrease, onDecrease }) => {
  return (
    <View>
      <Text>{color}</Text>
      <Button title={`INCREASE ${color}`} onPress={() => onIncrease()} />
      <Button title={`DECREASE ${color}`} onPress={() => onDecrease()} />
    </View>
  );
};

export default ColorCounter;
