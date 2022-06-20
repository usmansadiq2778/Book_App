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
  Alert,
} from 'react-native';
// import { Calendar } from 'react-native-calendars';
// import {} from 'react-native-Calendar'

// const image = { uri: "https://reactjs.org/logo-og.png" };

function Profile({ navigation, route }) {
  const { userDetails } = route.params;
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        style={{ flex: 1 }}
        //We are using online image to set background
        source={{
          // uri:'https://media.istockphoto.com/photos/speed-motion-stripe-neon-colorful-abstract-blue-blurred-prism-lines-picture-id1162198296?b=1&k=20&m=1162198296&s=170667a&w=0&h=uETdfIGiXmhXahUsExwXtbsiAGW7TPjDdyK-7SbGjJY=',
          uri: 'https://media.istockphoto.com/photos/speed-motion-stripe-neon-colorful-abstract-blue-blurred-prism-lines-picture-id1162198296?b=1&k=20&m=1162198296&s=170667a&w=0&h=uETdfIGiXmhXahUsExwXtbsiAGW7TPjDdyK-7SbGjJY=',
        }}
      >
        <View style={styles.container}>
          <View style={styles.topcontainer}>
            <View style={styles.topimge}>
              <Image
                style={{ width: 50, height: 50, borderRadius: 50 }}
                source={{
                  uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_xVcoyqzFDXAD3bkR2UjCDrEicTJX127t_Q&usqp=CAU',
                }}
              />

              <Image
                style={styles.tinyLogo}
                source={{
                  // require('/images/cover photo.jpg');
                  // uri: 'https://cdn.pixabay.com/photo/2020/05/09/13/29/photographer-5149664__340.jpg',
                  uri: userDetails.avatar_url,

                  // uri:'https://scontent.flyp2-1.fna.fbcdn.net/v/t39.30808-6/269703417_1360277117745963_8399168724671282588_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=e3f864&_nc_ohc=LsFIemctq74AX8mZd0I&tn=6YvQTfEopU_KTfWj&_nc_ht=scontent.flyp2-1.fna&oh=00_AT-76LCp3t_aDc89WZPqB2i28LttwoocYHH3Z6s8Naz7zA&oe=62690D66'
                }}
              />

              <Image
                style={{ width: 50, height: 50, borderRadius: 50 }}
                source={{
                  uri: 'data:image/png;base64,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',
                }}
              />
            </View>

            <View style={styles.online}>
              <Text
                style={{
                  color: 'whitesmoke',
                  fontWeight: 'bold',
                }}
              >
                Online{' '}
                <Text
                  style={{ color: 'green', fontSize: 55, fontWeight: 'bold' }}
                >
                  .
                </Text>
              </Text>
            </View>
          </View>
          <View style={styles.midcontainer}>
            <Text
              style={{
                fontSize: 22,
                fontWeight: 'bold',
                color: 'white',
                textTransform: 'capitalize',
              }}
            >
              {/* M Usman sadiq */}
              {userDetails.login}
            </Text>
            <Text
              style={{ fontSize: 16, color: 'white', alignItems: 'center' }}
            >
              Web and Mobile application developer
            </Text>

            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
              <TouchableOpacity
                onPress={() => navigation.navigate('CameraComp')}
                style={[styles.buttonContainer, styles.loginButton]}
              >
                <Text
                  style={{ fontSize: 27, fontWeight: 'bold', color: 'white' }}
                >
                  Follow
                </Text>
              </TouchableOpacity>
            </View>

            <View style={styles.hedding}>
              <View>
                <Text
                  style={{
                    color: 'white',
                    textAlign: 'center',
                    fontWeight: 'bold',
                    fontSize: 19,
                    paddingHorizontal: 10,
                  }}
                >
                  62 {' \n'} posts
                </Text>
              </View>
              <View>
                <Text
                  style={{
                    color: 'white',
                    textAlign: 'center',
                    fontWeight: 'bold',
                    fontSize: 19,
                    paddingHorizontal: 10,
                  }}
                >
                  124 {' \n'} Followers
                </Text>
              </View>
              <View style={styles.heading2}>
                <Text
                  style={{
                    color: 'white',
                    textAlign: 'center',
                    fontWeight: 'bold',
                    fontSize: 19,
                    paddingHorizontal: 10,
                  }}
                >
                  48 {' \n'} photo
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.botcontainer}>
            <View style={styles.imagegalery}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-evenly',
                  marginBottom: 10,
                }}
              >
                <View>
                  <Image
                    // source={{ uri: 'https://scontent.flyp2-1.fna.fbcdn.net/v/t39.30808-6/277771737_1416697658770575_3095481264235428301_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=dIwTQNgnmqcAX-XsVoP&_nc_ht=scontent.flyp2-1.fna&oh=00_AT91T6ctWgr6AW_8mfjxJE1t9L95rPknOr83v1EPxKBMFw&oe=6268849B' }}
                    source={{
                      uri: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzh8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
                    }}
                    style={styles.images}
                  />
                </View>
                <View>
                  <Image
                    source={{
                      uri: 'https://images.unsplash.com/photo-1600275669439-14e40452d20b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8OXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
                    }}
                    style={styles.images}
                  />
                </View>
                <View>
                  <Image
                    source={{
                      uri: 'https://images.unsplash.com/photo-1549057446-9f5c6ac91a04?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MjB8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
                    }}
                    style={styles.images}
                  />
                </View>
              </View>

              <View
                style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}
              >
                <View>
                  <Image
                    source={{
                      uri: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
                    }}
                    style={styles.images}
                  />
                </View>
                <View>
                  <Image
                    source={{
                      uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzR8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
                    }}
                    style={styles.images}
                  />
                </View>
                <View>
                  <Image
                    source={{
                      uri: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzh8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
                    }}
                    style={styles.images}
                  />
                </View>
              </View>

              <View style={{ flexDirection: 'row' }}></View>
              <View style={{ flexDirection: 'row' }}></View>
            </View>
          </View>

          <StatusBar style="dark" backgroundColor="transparent" color="blue" />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}
export { Profile };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    //   backgroundColor:'grey'
    // padding:10
  },
  images: {
    width: 100,
    height: 80,
    marginHorizontal: 5,
    // resizeMode:'c'
  },
  imagegalery: {
    // marginTop:30
    // paddingHorizontal:10
    // marginHorizontal:5
  },
  pasw: {
    // flex :1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  hedding: {
    paddingHorizontal: 10,
    padding: 7,
    // paddingTop:17,
    marginTop: 9,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#483d8b',
    // backgroundColor:'blue',
    alignItems: 'center',
    borderRadius: 40,
  },
  heading2: {
    borderWidth: 1,
    borderRadius: 29,
    // borderColor:'blue',
    borderColor: '#7CFC00',
    padding: 5,
    paddingHorizontal: 15,
  },
  tinyLogo: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },

  buttonContainer: {
    height: 55,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    width: 150,
    borderRadius: 30,
    backgroundColor: 'transparent',
    // backgroundColor:'blue'
  },

  topcontainer: {
    flex: 1,
    //  paddingTop:20,
    paddingHorizontal: 10,
    // backgroundColor:'blue',

    justifyContent: 'center',
  },
  midcontainer: {
    height: '100%',
    // backgroundColor:'red',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1.2,
  },
  botcontainer: {
    //  backgroundColor:'yellow',
    flex: 1,
    paddingHorizontal: 10,
    // paddingTop:10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  online: {
    alignItems: 'center',
    marginTop: -40,
  },
  topimge: {
    flexDirection: 'row',
    justifyContent: 'space-between',

    alignItems: 'center',

    paddingHorizontal: 10,
  },
  logi: {
    justifyContent: 'flex-end',
    alignItems: 'center',
  },

  loginButton: {
    marginTop: 10,
    // backgroundColor: "#00b5ec",
    borderWidth: 1,
    borderColor: 'white',
  },
});
