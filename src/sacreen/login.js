// import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Linking,
  Image,
  SafeAreaView,
  Button,
  Alert,
  // TextInput,
  TouchableOpacity,
  StatusBar,
  Text,
  View,
  ImageBackground,
} from 'react-native';
// import { firebase } from 'firebase';

import { firebase } from '../sacreen/services/db/firebaseconfig';

// import Ionicons from '@expo/vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/FontAwesome';
import { TextInput, RadioButton } from 'react-native-paper';
import { useState } from 'react';
const myIcon = <Icon name="rocket" size={30} color="#900" />;

function Login({ navigation }) {
  // const { itemId, username } = route.params;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(true);
  const [value, setValue] = useState('');

  // if (firebase.auth().currentUser !== null) {
  //   navigation.replace('Parameter', {
  //     Email: email,
  //     Password: password,
  //     itemId: Math.floor(Math.random() * 100),
  //     username: 'usman sadiq',
  //     Age: 24,
  //     section: 16,
  //     village: '248 rb',
  //   });
  // } else {
  //   // user is logged out
  // }

  function loginUser() {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((response) => {
        Alert.alert('congratulation', 'you have succesfuly Login');
        navigation.navigate('Parameter', {
          Email: email,
          //   Password: password,
          //   itemId: Math.floor(Math.random() * 100),
          //   username: 'usman sadiq',
          //   Age: 24,
          //   section: 16,
          //   village: '248 rb',
        });
        // );
      })
      .catch((error) => {
        Alert.alert('❌', 'Wrong email or password.');
      });
  }

  // function setfirebase() {
  //   console.log(firebase);
  //   firebase.firestore().collection('users').doc('usamnsbilal').set({
  //     first_name: 'Muhammad bilal sadiq',
  //     last_name: 'sadiq sab',
  //     email: 'mianusman2488"gmail.com',
  //   });
  // }
  // function getfirebase() {
  //   console.log(firebase);
  //   firebase
  //     .firestore()
  //     .collection('users')
  //     .get()
  //     .then((response) => {
  //       console.log(response);
  //     })
  //     .catch((error) => {});
  // }
  // const myitem = firebase.database().ref('users');
  // myitem.on('value', (datasnap) => {
  //   console.log(datasnap.val());
  // });
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        style={{ flex: 1 }}
        //We are using online image to set backgrou
        source={{
          uri: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/crystal_background.jpg',
        }}
      >
        <View style={styles.container}>
          <View style={styles.topcontainer}>
            <Image
              style={styles.tinyLogo}
              source={{
                //   uri: 'https://reactnative.dev/img/tiny_logo.png',
                uri: 'https://graphicsfamily.com/wp-content/uploads/2020/08/Company-Logo-Design-on-3d-glass-window-scaled.jpg',
              }}
            />
          </View>
          <View style={styles.midcontainer}>
            <TextInput
              // selectTextOnFocus="true"
              style={styles.input}
              placeholder="Emial"
              value={email}
              onChangeText={(email) => setEmail(email)}
              placeholderTextColor={'grey'}
              // fontWeight='bold'
              // fontSize='20'
              mode="outlined"
            />

            <TextInput
              value={password}
              mode="outlined"
              style={styles.input}
              placeholder="Password"
              onChangeText={(password) => setPassword(password)}
              placeholderTextColor={'grey'}
              right={
                <TextInput.Icon
                  name={passwordVisible ? 'eye' : 'eye-off'}
                  onPress={() => setPasswordVisible(!passwordVisible)}
                />
              }
              secureTextEntry={passwordVisible}
            />
          </View>

          <View style={styles.botcontainer}>
            {/* <Button style={styles.button} color='blue'   title='login'> </Button> */}
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <TouchableOpacity
                style={[styles.buttonContainer, styles.loginButton]}
                disabled={
                  email.length > 4 && password.length > 4 ? false : true
                }
                onPress={() => {
                  if (email.length === 0) {
                    Alert.alert('Sorry 😥', 'You Missed Email');
                  } else if (password.length === 0) {
                    Alert.alert('Sorry 🔑', 'you missed Password');
                  } else {
                    loginUser();
                  }

                  // navigation.navigate('Parameter', {
                  //   Email: email,
                  //   Password: password,

                  //   itemId: Math.floor(Math.random() * 100),
                  //   username: 'usman sadiq',
                  //   Age: 24,
                  //   section: 16,
                  //   village: '248 rb',
                  // });
                  // setfirebase();
                  // getfirebase();
                }}
              >
                <Text style={styles.loginText}> Login </Text>
              </TouchableOpacity>
            </View>

            <View style={styles.pasw}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Signup');
                }}
              >
                <Text style={{ color: 'blue' }}> create account </Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  navigation.navigate(datafecth());
                }}
              >
                <Text style={{ color: 'blue' }}> Forgat Password </Text>
              </TouchableOpacity>
            </View>

            <View style={{ alignItems: 'center', flex: 2, marginTop: 20 }}>
              <Icon.Button
                name="facebook"
                backgroundColor="#3b5998"
                onPress={() =>
                  Linking.openURL(
                    'https://www.facebook.com/mianusman.mianusmsn/'
                  )
                }
              >
                <Text
                  style={{
                    fontFamily: 'Arial',
                    fontSize: 15,
                    paddingLeft: 10,
                    fontWeight: 'bold',
                    color: 'white',
                  }}
                >
                  Login with Facebook
                </Text>
              </Icon.Button>
            </View>
          </View>

          <StatusBar style="dark" backgroundColor="transparent" color="blue" />
        </View>
      </ImageBackground>
      <View style={styles.StatusBar}>
        <StatusBar
          translucent
          barStyle="light-content"
          // backgroundColor={'red'}
        />
      </View>
    </SafeAreaView>
  );
}

export { Login };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    //   backgroundColor:'grey'
    padding: 10,
  },
  pasw: {
    // flex :1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },

  tinyLogo: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },

  buttonContainer: {
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: 300,
    borderRadius: 30,
    backgroundColor: 'transparent',
    // backgroundColor:'blue'
  },

  textt: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inp: {
    color: 'blue',
    marginBottom: 10,
    fontWeight: 'bold',
  },
  input: {
    // flex:1,
    height: 44,

    marginBottom: 10,
    padding: 13,
    color: 'grey',
    width: '94%',
    backgroundColor: 'whitesmoke',

    // placeholderTextColor:'white',

    // borderRadius:30,
    // underlineColorAndroid:"transparent"
  },
  topcontainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    // backgroundColor:'blue'
  },
  logi: {
    justifyContent: 'flex-end',
    alignItems: 'center',
  },

  midcontainer: {
    // zIndex:1,
    paddingTop: 30,
    // padding :20,
    // backgroundColor:'red',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flex: 1,
  },
  botcontainer: {
    flex: 1,
    // justifyContent:'flex-start',
    // alignItems:'center',
  },
  loginButton: {
    backgroundColor: '#00b5ec',
  },
});
