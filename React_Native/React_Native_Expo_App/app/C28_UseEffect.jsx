import { View, Text, Pressable, Alert } from "react-native";
import React, { useEffect, useState } from "react";

export default function C28_UseEffect() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log("counter => ", counter);
  }, [counter]);

  function alerta() {
    Alert.alert("Delete!", "do you want to delete?", [
      {
        text: "cancel",
        onPress: () => {
          console.log("cancel");
        },
      },
      {
        text: "delete",
        onPress: () => alerta(),
      },
    ]);
  }

  return (
    <View>
      <Text>{counter}</Text>
      <Text>C28_UseEffect</Text>

      <Pressable onPress={() => setCounter((prev) => prev + 1)}>
        <Text>Increase</Text>
      </Pressable>
      <Pressable onPress={alerta}>
        <Text>alert</Text>
      </Pressable>
    </View>
  );
}
