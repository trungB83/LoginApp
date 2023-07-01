import React, { useState } from "react";
import { View, TextInput, Button } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function SignUpScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signUp = async () => {
    try {
      await AsyncStorage.setItem("user", JSON.stringify({ email, password }));
    } catch (e) {
      alert(e);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <TextInput placeholder="Email" value={email} onChangeText={setEmail} />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button 
        title="Sign Up"  
        onPress={() => {
          signUp();
          navigation.navigate('Login');    
        }}      
      />      
    </View>   
  );  
}