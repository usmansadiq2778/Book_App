import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Image,
  SafeAreaView,
  Button,
  Alert,
  // TextInput,
  TouchableOpacity,
  Text,
  View,
  ImageBackground,
} from 'react-native';
// import { createStackNavigator, createAppContainer } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Login } from './login';
import { Profile } from './profile';
import { useEffect, useState } from 'react';
import { TextInput } from 'react-native-paper';
import { RadioButton } from 'react-native-paper';
import { firebase } from '../sacreen/services/db/firebaseconfig';

function Signup({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(true);
  // const [password, setPassword] = useState('');
  const [fname, setfname] = useState('');
  const [lname, setlname] = useState('');
  const [confirmpassword, setconfirmpassword] = useState('');
  const [confpasswordVisible, setconfPasswordVisible] = useState(true);
  const [checked, setChecked] = useState('');
  // const [gender, setGender] = useState('female');
  const [value, setValue] = useState('');

  function setSignup() {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((response) => {
        Alert.alert('congatulation', 'you have successfully Signup');

        const restOfData = {
          firstName: fname,
          lastName: lname,

          confirmpassword: confirmpassword,
          Gender: value,
        };

        if (response.user.uid) {
          firebase
            .firestore()
            .collection('users')
            .doc(response.user.uid)
            .set(restOfData);
        }

        navigation.goBack();
      })
      .catch((error) => {
        Alert.alert('❌', 'Something Went Wrong, Please Retry');
      });
  }

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        style={{ flex: 1 }}
        //We are using online image to set background
        source={{
          uri: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/crystal_background.jpg',
        }}
      >
        <View style={styles.container}>
          <View style={styles.topcontainer}>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 35,
                color: 'white',
                marginBottom: 10,
              }}
            >
              Sign Up
            </Text>
            <Text style={{ color: 'grey' }}>
              please fill in this form to create account
            </Text>
            {/* <Text style={styles.textt}
    
                          Login
                   </Text> */}
          </View>
        </View>

        <View style={styles.midcontainer}>
          <View style={styles.nam}>
            <TextInput
              // onChange={(e) => setValue(e.target.value)}
              // value={fname}
              // selectTextOnFocus="true"
              style={styles.input1}
              onChangeText={(fname) => setfname(fname)}
              placeholder="First name"
              placeholderTextColor={'grey'}
            />
            <TextInput
              // selectTextOnFocus="true"
              style={styles.input1}
              onChangeText={(lname) => setlname(lname)}
              // value={lname}
              placeholder="Last name"
              placeholderTextColor={'grey'}
              // fontWeight='bold'
              // fontSize='20'
            />
          </View>

          <TextInput
            // selectTextOnFocus="true"
            style={styles.input}
            onChangeText={(email) => setEmail(email)}
            placeholder="Emial"
            // value="email"
            // value={email}
            placeholderTextColor={'grey'}
            // fontWeight='bold'
            // fontSize='20'
          />
          {/* <Text>Password:</Text> */}
          <TextInput
            style={styles.input}
            placeholder="Password"
            // value={password}
            // value="password"
            right={
              <TextInput.Icon
                name={passwordVisible ? 'eye' : 'eye-off'}
                onPress={() => setPasswordVisible(!passwordVisible)}
                style={{ justifyContent: 'center', alignItems: 'center' }}
              />
            }
            secureTextEntry={passwordVisible}
            onChangeText={(password) => setPassword(password)}
            placeholderTextColor={'grey'}
            // fontWeight='bold'
            // fontSize='20'
          />
          <TextInput
            // secureTextEntry="true"
            right={
              <TextInput.Icon
                name={confpasswordVisible ? 'eye' : 'eye-off'}
                onPress={() => setconfPasswordVisible(!confpasswordVisible)}
                style={{ justifyContent: 'center', alignItems: 'center' }}
              />
            }
            secureTextEntry={confpasswordVisible}
            style={styles.input}
            // value={confirmpassword}
            onChangeText={(confirmpassword) =>
              setconfirmpassword(confirmpassword)
            }
            // value={}
            placeholder="confirm password"
            placeholderTextColor={'grey'}
          />
          <Text
            style={{
              alignSelf: 'flex-start',
              fontWeight: 'bold',
              paddingHorizontal: 20,
            }}
          >
            Gender:
          </Text>
        </View>

        <View style={styles.botcontainer}>
          <View>
            <RadioButton.Group
              onValueChange={(newValue) => setValue(newValue)}
              value={value}
            >
              <View
                style={{
                  justifyContent: 'center',
                  flexDirection: 'row',
                }}
              >
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    paddingHorizontal: 15,
                  }}
                >
                  <TouchableOpacity onPress={() => setValue('male')}>
                    <Text style={{ fontWeight: 'bold' }}>Male</Text>
                  </TouchableOpacity>
                  <RadioButton
                    value="male"
                    color="blue"
                    // style={{ fontSize: 'bold' }}
                  />
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    // alignContent: 'center',
                    alignItems: 'center',
                    paddingHorizontal: 10,
                  }}
                >
                  <TouchableOpacity onPress={() => setValue('female')}>
                    <Text style={{ fontWeight: 'bold' }}>Female</Text>
                  </TouchableOpacity>
                  <RadioButton value="female" />
                </View>
              </View>
            </RadioButton.Group>
          </View>
          <View style={{ justifyContent: 'flex-start', marginTop: 5 }}>
            <TouchableOpacity
              // onPress={() => alert('you have success fully submit form!')}
              style={[styles.buttonContainer, styles.loginButton]}
              onPress={() => {
                if (email.length === 0 && password.length === 0) {
                  Alert.alert('sorry', 'you missed email and password');
                } else if (password !== confirmpassword) {
                  Alert.alert(
                    'Sorry',
                    'password are not same please try again'
                  );
                } else {
                  setSignup();
                }

                // navigation.navigate('Profile');
              }}
            >
              <Text style={styles.loginText}>Signup</Text>
            </TouchableOpacity>
            <Text>
              i accept the <Text style={{ color: 'blue' }}> Term of Use</Text> &{' '}
              <Text style={{ color: 'blue' }}> Privacy Policy</Text>
            </Text>
            <Text style={styles.alredy}>
              Already have an account ?
              <TouchableOpacity onPress={() => navigation.goBack('Login')}>
                <Text style={{ color: 'blue' }}>Login here</Text>
              </TouchableOpacity>
            </Text>
          </View>
          <View style={styles.pasw}>
            {/* <TouchableOpacity
        onPress={() => alert('Hello, world!')}
        style={{ backgroundColor: 'blue' }}>
        <Text style={{ fontSize: 20, color: '#fff' }}>Pick a photo</Text>
      </TouchableOpacity> */}
            {/* <Text>
              Alredy have an account?  Go to Profile
            
              
              </Text>
              */}
          </View>
        </View>

        <StatusBar style="dark" backgroundColor="" color="blue" />
      </ImageBackground>
    </SafeAreaView>
  );
}
export { Signup };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    padding: 10,
    // backgroundColor:'blue'
  },
  alredy: {
    // marginTop:5,
    alignSelf: 'center',
  },
  pasw: {
    // flex :1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  bag: {
    backgroundColor: 'grey',
  },

  tinyLogo: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },

  buttonContainer: {
    height: 30,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    // marginBottom: 20,
    width: 100,
    color: 'white',
    // borderRadius:30,
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

  loginText: {
    color: 'white',
    fontWeight: 'bold',
    // marginTop:5
  },

  nam: {
    // flex: 1,
    justifyContent: 'space-between',
    alignContent: 'center',
    width: '94%',
    flexDirection: 'row',
    marginBottom: 10,
  },
  //     inp:{
  //         color:'blue',
  //  marginBottom:10,
  //  fontWeight:'bold',

  //     },
  input1: {
    // flex:1,
    height: 40,
    width: '44%',
    // width:390,

    padding: 10,

    justifyContent: 'space-between',
    // marginHorizontal:9,

    backgroundColor: 'whitesmoke',

    // placeholderTextColor:'grey',
  },
  input: {
    // alignItems: 'center',
    // justifyContent: 'center',

    height: 40,
    marginTop: 0,
    marginBottom: 20,
    padding: 10,
    // color:'grey',
    width: '94%',
    // backgroundColor:'white' ,
    backgroundColor: 'whitesmoke',
    // borderColor:'white',
    // placeholderTextColor:'grey',
    // borderWidth:1,
    // fontWeight:'bold',
    // fontSize:20,

    // borderRadius:40,
    // underlineColorAndroid:"transparent"
  },
  topcontainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
    // backgroundColor:'blue'
    // marginBottom :20,
    width: '94%',

    marginHorizontal: 'auto',
    borderWidth: 1,
    paddingHorizontal: 30,
    borderColor: 'grey',
    borderTopWidth: 0,

    borderStartWidth: 0,
    borderEndWidth: 0,
  },

  midcontainer: {
    // backgroundColor:'red',
    //    justifyContent:'center',
    alignItems: 'center',
    flex: 2,
    // marginVertical:10
    paddingHorizontal: 20,
    marginBottom: 8,
    // paddingVertical:10
  },
  botcontainer: {
    flex: 1,
    paddingTop: 5,
    justifyContent: 'flex-end',

    // alignItems:'flexstart',
    // padding:30,
    paddingHorizontal: 33,
  },
  loginButton: {
    backgroundColor: '#00b5ec',

    shadowColor: '#808080',
    shadowOffset: {
      width: 0,
      height: 9,
    },
  },
});
