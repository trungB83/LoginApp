import React from "react";
import { View, Text, Button } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function HomeScreen({ navigation }) {
  const logout = async () => {
    await AsyncStorage.removeItem("user");
    navigation.navigate("Login");
  };

  return (
    <View>
      <Text style={{ textAlign: "center", fontSize: 20 }}>Landing Screen</Text>
      <Button title="Logout" onPress={logout} />
    </View>
  );
}
