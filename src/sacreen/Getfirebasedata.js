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
  Platform,
} from 'react-native';
import * as MediaLibrary from 'expo-media-library';
import * as ImagePicker from 'expo-image-picker'; // not react-image-picker
import React, { useEffect } from 'react';
import { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { TextInput, Button } from 'react-native-paper';
import Ionicons from '@expo/vector-icons/Ionicons';
import { firebase } from '../sacreen/services/db/firebaseconfig';

function Getdata({ navigation, route }) {
  const [image, setImage] = useState(null);
  const [person, setPerson] = useState();
  const [loading, setLoading] = useState(true);
  const { Imagedata } = route.params;
  const [imagegallery, setImagegallery] = useState(null);
  const [imageFromGallery, setImageFromGallery] = useState();

  useEffect(() => {
    const userId = firebase.auth().currentUser.uid;
    // return()
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
  }, []);
  useEffect(() => {
    async () => {
      if (Platform.OS !== 'web') {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('sorry ,we need camera rool permission');
        }
      }
    };
  }, []);

  const UploadFromuri = () => {
    if (!photo.cancelled) {
      const ext = photo.uri.substring(photo.uri.LastIndexOf('.') + 1);
    }
  };
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
      base64: true,
      presentationStyle: 0,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };
  if (loading === true) {
    return <Text>Fetching the data</Text>;
  }
  const uriToBlob = (uri) => {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();

      xhr.onload = function () {
        // return the blob
        resolve(xhr.response);
      };

      xhr.onerror = function () {
        // something went wrong
        reject(new Error('uriToBlob failed'));
      };

      // this helps us get a blob
      xhr.responseType = 'blob';

      xhr.open('GET', uri, true);
      xhr.send(null);
    });
  };

  return (
    <React.Fragment>
      {loading === true ? (
        <Text>Fetching the data </Text>
      ) : (
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          {/* */}
          {Imagedata ? (
            <Image
              source={{ uri: Imagedata.uri }}
              style={{ width: 200, height: 200, borderRadius: 100 }}
            />
          ) : (
            <Ionicons name={'person-circle'} size={200} color={'purple'} />
          )}
          <TouchableOpacity
            style={{
              padding: 20,
              borderColor: 'grey',
              shadowColor: 'grey',
              // shadowOffset: 2,
              borderWidth: 2,
              backgroundColor: 'blue',
              fontWeight: 'bold',
            }}
            onPress={pickImage}
          >
            <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 16 }}>
              Choese imagae from gallery
            </Text>
          </TouchableOpacity>
          {image && (
            <Image
              source={{ uri: image }}
              style={{ width: 200, height: 200, borderRadius: 100 }}
            />
          )}
          {/* <Button>check local storage permissons</Button> */}
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Galleryimage');
            }}
          >
            <Text style={{ color: 'red', fontWeight: 'bold' }}>
              image gallery
            </Text>
          </TouchableOpacity>
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
