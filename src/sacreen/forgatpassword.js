import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Image,
  SafeAreaView,
  Button,
  TextInput,
  TouchableOpacity,
  Text,
  View,
  ImageBackground,
} from 'react-native';

import { Scrolling } from './scrool';
import { Avatar, Card, Title, Paragraph } from 'react-native-paper';

import React from 'react-native';
const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;

function Forgat({ navigation, route }) {
  return (
    <View style={styles.container}>
      <View style={styles.topcontainer}>
        <Text style={{ fontWeight: 'bold', fontSize: 27, color: 'white' }}>
          Forgat password
        </Text>
      </View>

      <View style={styles.midcontainer}>
        <TextInput
          selectTextOnFocus="true"
          style={styles.input}
          placeholder="Old Password"
          placeholderTextColor={'grey'}
          // fontWeight='bold'
          // fontSize='20'
        />

        <TextInput
          secureTextEntry="true"
          style={styles.input}
          left={LeftContent}
          placeholder="new  Password"
          placeholderTextColor={'grey'}
        />
        <TextInput
          secureTextEntry="true"
          style={styles.input}
          placeholder="Re Enter new  Password"
          placeholderTextColor={'grey'}
        />
      </View>

      <View style={styles.botcontainer}>
        <TouchableOpacity
          style={[styles.buttonContainer, styles.loginButton]}
          onPress={() => {
            navigation.popToTop();
          }}
        >
          <Text style={styles.loginText}> Login </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.buttonContainer, styles.loginButton]}
          onPress={() => {
            navigation.navigate('');
          }}
        >
          <Text style={styles.loginText}> Go to create post</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
export { Forgat };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    //   justifyContent:'space-between',
    //   alignItems:'center',
    flexDirection: 'column',
    padding: 10,
    // backgroundColor:'blue'
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
    height: 50,

    marginBottom: 20,
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
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor:'yellow',
    borderRadius: 50,
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
    flex: 2,
  },
  botcontainer: {
    flex: 1,
    // justifyContent:'center',
    alignItems: 'center',
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
