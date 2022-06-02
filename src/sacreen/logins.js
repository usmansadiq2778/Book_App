import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Image,
  SafeAreaView,
  TouchableOpacity,
  Text,
  View,
  ImageBackground,
} from 'react-native';

import { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { TextInput, Button } from 'react-native-paper';
import Ionicons from '@expo/vector-icons/Ionicons';

function Logins({ navigation, route }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(true);
  return (
    <View style={{ justifyContent: 'center', padding: 10 }}>
      <Ionicons
        name="md-checkmark-circle"
        size={102}
        color="green"
        style={{ alignSelf: 'center', marginBottom: 50 }}
      />

      <Text>{email}</Text>

      <TextInput
        label="Email"
        onChangeText={(email) => setEmail(email)}
        mode="outlined"
        value={email}
      />

      <TextInput
        style={{ marginTop: 15, marginBottom: 20 }}
        label="Password"
        onChangeText={(Password) => setPassword(Password)}
        mode="outlined"
        value={password}
        right={
          <TextInput.Icon
            name={passwordVisible ? 'eye' : 'eye-off'}
            onPress={() => setPasswordVisible(!passwordVisible)}
          />
        }
        secureTextEntry={passwordVisible}
      />
      <Button
        icon="google-plus"
        mode="outlined"
        color="red"
        onPress={() => {
          navigation.navigate('Parameter', {
            userEmail: email,
            userPasword: password,
          });
        }}
      >
        Press me
      </Button>
    </View>
  );
}
export { Logins };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //   backgroundColor:'blue',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    //   padding:10,
    // backgroundColor:'blue'
  },
});
