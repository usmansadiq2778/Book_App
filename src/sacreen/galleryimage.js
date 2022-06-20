import React, { useState, useEffect } from 'react';
import {
  Button,
  Image,
  View,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { firebase } from '../sacreen/services/db/firebaseconfig';
import { Video, AVPlaybackStatus } from 'expo-av';

import * as ImagePicker from 'expo-image-picker';
import { ActivityIndicator } from 'react-native-paper';
import { firebaseConfig } from '../sacreen/services/db/firebaseconfig';
export function Galleryimage() {
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  const [image, setImage] = useState(false);
  const [vidio, setvidio] = useState(false);
  const [uploading, setLoading] = useState(false);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,

      presentationStyle: 0,
      title: 'Video Picker',
      aspect: [4, 3],
      quality: 1,
      base64: true,
    });

    console.log(result);

    if (result != null && !result.cancelled) {
      setImage(result.uri, 'test images');
      setvidio(result.uri, 'test vidio');
    }
  };
  // <Video
  //   ref={video}
  //   // style={styles.video}
  //   source={{
  //     uri: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
  //   }}
  //   useNativeControls
  //   resizeMode="contain"
  //   isLooping
  //   onPlaybackStatusUpdate={(status) => setStatus(() => status)}
  // />;
  const Uploadimage = async () => {
    const blob = await new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.onload = function () {
        resolve(xhr.response); // when BlobModule finishes reading, resolve with the blob
      };
      xhr.onerror = function () {
        reject(new TypeError('Network request failed')); // error occurred, rejecting
      };
      xhr.responseType = 'blob'; // use BlobModule's UriHandler
      xhr.open('GET', image, true); // fetch the blob from uri in async mode
      xhr.send(null); // no initial data
    });

    const ref = firebase.storage().ref().child(new Date().toISOString());
    const snapshot = ref.put(blob);

    snapshot.on(
      firebase.storage.TaskEvent.STATE_CHANGED,
      () => {
        if (uploading === true) {
          Alert.alert('image has successfully upload');
        }
        setLoading(true);
      },
      (error) => {
        setLoading(false);
        console.log(error);
        blob.close();
        return;
      },
      () => {
        snapshot.snapshot.ref.getDownloadURL().then((uri) => {
          // ');

          setLoading(false);
          console.log('download uri', uri);
          blob.close();
          return uri;
        });
      }
    );

    // return the result, eg. remote URI to the image
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {vidio && (
        <Video
          ref={video}
          // style={styles.video}
          style={{ width: 300, height: 300 }}
          source={{
            uri: vidio,
          }}
          useNativeControls
          resizeMode="contain"
          isLooping
          onPlaybackStatusUpdate={(status) => setStatus(() => status)}
        />
      )}
      {/* {image && (
        <Image source={{ uri: image }} style={{ width: 300, height: 300 }} />
      )} */}
      <TouchableOpacity
        style={{ marginTop: 20 }}
        // title="Pick an image from camera roll"
        onPress={pickImage}
      >
        <Text style={{ color: 'grey', fontWeight: 'bold' }}>
          Pick an image from camera roll
        </Text>
      </TouchableOpacity>
      {!uploading ? (
        <TouchableOpacity
          // title="Upload image firebase"
          style={{
            marginTop: 30,
            padding: 20,
            borderColor: 'grey',
            shadowColor: 'grey',
            // shadowOffset: 2,
            borderWidth: 2,
            backgroundColor: 'blue',
            fontWeight: 'bold',
            borderRadius: 16,
          }}
          onPress={Uploadimage}
        >
          <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 16 }}>
            Upload To firebase
          </Text>
        </TouchableOpacity>
      ) : (
        <ActivityIndicator size="Large" color="black" />
      )}
    </View>
  );
}
