import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>HomeScreen</Text>

      <Button title="Go to list" onPress={() => navigation.navigate("List")} />
      <Button
        title="Counter Screen"
        onPress={() => navigation.navigate("Counter")}
      />
      <Button
        title="Color Screen"
        onPress={() => navigation.navigate("Color")}
      />
      <Button
        title="Square Screen"
        onPress={() => navigation.navigate("Square")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
