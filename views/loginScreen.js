import React, {useState} from 'react';
import {View, TextInput, Button} from 'react-native';

export default function LoginScreen({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        placeholder="Password"
        value={password}  
        onChangeText={setPassword}
        secureTextEntry
      />
       <Button
        title="Login"   
        onPress={() => navigation.navigate('Home')}
      />
      <Button 
        title="SignUp"
        onPress={() => navigation.navigate('SignUp')}
      />   
    </View>
  );
}