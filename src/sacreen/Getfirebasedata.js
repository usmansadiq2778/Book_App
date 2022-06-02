import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Image,
  SafeAreaView,
  TouchableOpacity,
  Text,
  Alert,
  View,
  ImageBackground,
} from 'react-native';
import React from 'react';
import { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { TextInput, Button } from 'react-native-paper';
import Ionicons from '@expo/vector-icons/Ionicons';
import { firebase } from '../sacreen/services/db/firebaseconfig';

function Getdata({ navigation, route }) {
  const [person, setPerson] = useState();
  const [loading, setLoading] = useState(true);

  const userId = firebase.auth().currentUser.uid;

  firebase
    .firestore()
    .collection('users')

    .doc(userId)
    .get()
    .then((response) => {
      setPerson(response.data());
      //   console.log(response.data());
      setLoading(false);
    })
    .catch((error) => {
      Alert.alert('test', 'error');
      setLoading(false);
    });

  return (
    <React.Fragment>
      {loading === true ? (
        <Text>Fetching the data </Text>
      ) : (
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          {/* <Ionicons name={'person-circle'} size={200} color={'purple'} /> */}
          <Text style={{ fontSize: 30, alignSelf: 'center' }}>
            first_name : {person.firstName}
            {/* Hi mian how are you */}
          </Text>
          <Text style={{ fontSize: 30, alignSelf: 'center' }}>
            last_name : {person.lastName}
          </Text>
          <Text style={{ fontSize: 30, alignSelf: 'center' }}>
            Gender: {person.Gender}
          </Text>
          <Text style={{ fontSize: 30, alignSelf: 'center' }}>
            password: {person.confirmpassword}
          </Text>
        </View>
      )}
    </React.Fragment>
  );
}
// </React.Fragment>
//   );
// }
export { Getdata };
