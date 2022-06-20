import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ImageBackground,
} from 'react-native';
import { useState, useEffect } from 'react';
import { Camera } from 'expo-camera';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { Avatar } from 'react-native-paper';

export function CameraComp({ navigation }) {
  const [hasPermission, setHasPermission] = useState(null);
  const [camera, setCamera] = useState(null);
  const [image, setimage] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [capturedImage, setCapturedImage] = useState(null);
  const [previewVisible, setPreviewVisible] = useState(false);
  const [show, setShow] = useState(false);
  // const __startCamera = () => {
  useEffect(() => {
    (async () => {
      const camerastatus = await Camera.requestCameraPermissionsAsync();
      if (camerastatus.status === 'granted') {
        setHasPermission(true);
      } else {
        setHasPermission(false);
      }

      // setHasPermission(camerastatus.status === 'granted');
    })();
  }, []);
  // };

  const CameraPreview = ({ photo }) => {
    console.log('sdsfds', photo);
    return (
      <View
        style={{
          backgroundColor: 'transparent',
          flex: 1,
          width: '100%',
          height: '100%',
        }}
      >
        <ImageBackground
          source={{ uri: photo && photo.uri }}
          style={{
            flex: 0.8,
          }}
        />
      </View>
    );
  };
  const takepicture = async () => {
    if (!camera) return;
    const options = { quality: 1, base64: true };
    const photo = await camera.takePictureAsync(options);
    console.log(photo);
    setPreviewVisible(true);
    setCapturedImage(photo);
  };
  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text> No camera Access</Text>;
  }
  const __retakePicture = () => {
    setCapturedImage(null);
    setPreviewVisible(false);
    // __startCamera();
  };
  const onSignupPress = () => {
    this.setState({ isHidden: true });
  };
  return (
    <View style={{ flex: 1 }}>
      {/* <View style={styles.Cameracontainer}> */}

      {previewVisible && capturedImage ? (
        <CameraPreview
          photo={capturedImage}
          // savePhoto={__savePhoto}
          retakePicture={__retakePicture}
        />
      ) : (
        <Camera
          ref={(ref) => setCamera(ref)}
          style={styles.fixedratio}
          // style={{ height: 400, width: '100%' }}
          type={type}
          ratio={'1:1'}
        >
          <View
            style={{
              position: 'absolute',
              justifyContent: 'space-between',
              flex: 1,
              padding: 20,
              // flex: 1,
              width: '100%',
              backgroundColor: 'transparent',
              // flexDirection: 'row',
            }}
          >
            <View
              style={{
                position: 'relative',
                alignSelf: 'flex-start',
                flex: 1,
                // alignItems: 'center',
                // bottom: 20,
                top: 10,
              }}
            >
              <TouchableOpacity
                style={styles.button}
                onPress={() => {
                  setType(
                    type === Camera.Constants.Type.back
                      ? Camera.Constants.Type.front
                      : Camera.Constants.Type.back
                  );
                }}
              >
                <Ionicons
                  name={'camera-reverse-outline'}
                  size={55}
                  color={'blue'}
                  // style={{ borderColor: 'blue', borderWidth: 2 }}
                />
              </TouchableOpacity>
            </View>
            <View
              style={{
                // position: 'absolute',
                // bottom: 30,
                flex: 1,
                justifyContent: 'center',
                // alignSelf: 'center',
                alignItems: 'center',
                right: 100,
                top: 430,
              }}
            >
              <TouchableOpacity
                style={
                  {
                    // position: 'absolute',
                    // alignSelf: 'center',
                    // // top: 495,
                    // bottom: 0,
                    // // right: 100,
                    // alignSelf: 'center',
                    // paddingHorizontal: 20,
                  }
                }
                onPress={() => {
                  takepicture();
                }}
              >
                <Avatar.Image
                  style={{
                    color: 'white',
                    backgroundColor: 'white',
                    borderColor: 'blue',
                    borderWidth: 2,
                  }}
                ></Avatar.Image>
              </TouchableOpacity>
            </View>
            {/* {previewVisible && <Image photo={capturedImage} />} */}
          </View>
        </Camera>
      )}
      {/* {capturedImage && (
        <Image
          source={{ uri: capturedImage.uri }}
          style={{ width: 200, height: 200 }}
        />
      )} */}

      <TouchableOpacity
        style={{
          position: 'absolute',
          alignSelf: 'flex-start',
          // top: 495,
          bottom: 20,
          // right: 100,
          // alignSelf: 'center','
          // display: 'none',
          paddingHorizontal: 20,

          // onSignupPress()
        }}
        onPress={() => {
          // takepicture();
          __retakePicture();
        }}
      >
        <MaterialCommunityIcons
          name={'camera-retake-outline'}
          size={55}
          color={'white'}
          // style={{ borderColor: 'blue', borderWidth: 2 }}
        />
        {/* <Image>source={require('./../../images/images.jpg')}</Image> */}
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Getdata', {
            Imagedata: capturedImage,
          });
        }}
        style={{
          position: 'absolute',
          bottom: 40,
          alignSelf: 'flex-end',
          paddingHorizontal: 22,
          fontWeight: 'bold',
        }}
      >
        <Text style={{ fontWeight: 'bold', color: 'red' }}>Go to profile</Text>
      </TouchableOpacity>
    </View>
    // </View>
  );
}

const styles = StyleSheet.create({
  Cameracontainer: {
    flex: 1,
    // flexDirection: 'row',
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  fixedratio: {
    aspectRatio: 1,
    flex: 1,
    height: 400,
    width: '100%',
  },

  button: {
    // position: 'absolute',
    // bottom: 320,
    // borderColor: 'blue',
    // borderWidth: 1,
    // top: 145,
    // flex: 1,
    // alignSelf: 'center',
    // alignItems: 'center',
    // padding: 15,
    // paddingHorizontal: 20,
    // justifyContent: 'center',
    // alignSelf: 'center',
  },
});
