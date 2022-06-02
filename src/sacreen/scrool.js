import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Image,
  SafeAreaView,
  TextInput,
  FlatList,
  TouchableOpacity,
  Text,
  View,
  ImageBackground,
} from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
// import {Avatar, Button , Card, Title, Paragraph} from 'react-native-paper'
import { Parameter } from '../sacreen/pameter';
// import {imag} from '/images/profiel-picture';

const LeftContent = (props) => <Avatar.Icon {...props} icon="camera" />;

function Scrolling({ navigation }) {
  const numbers = [1, 2, 3, 4, 5, 6];

  const numbersObjArray = [
    {
      name: 'M Usman sadiq',
      age: 22,
      dob: 1998,
      pic: 'https://cdn.pixabay.com/photo/2022/02/23/05/10/pastry-7030032__340.jpg',
    },
    {
      name: 'M Ali raxa sadiq',
      age: 20,
      dob: 1998,
      pic: 'https://cdn.pixabay.com/photo/2022/04/06/12/41/landscape-7115513__340.jpg',
    },
    {
      name: ' M bilal sadiq',
      age: 25,
      dob: 1998,
      pic: 'https://cdn.pixabay.com/photo/2017/04/01/21/06/portrait-2194457__340.jpg',
    },
    {
      name: 'M Hussnan Anwar',
      age: 34,
      dob: 1998,
      pic: 'https://images.unsplash.com/photo-1549057446-9f5c6ac91a04?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MjB8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
      name: 'M manan Aslam',
      age: 23,
      dob: 1998,
      pic: 'https://cdn.pixabay.com/photo/2017/06/20/22/14/man-2425121__340.jpg',
    },
  ];
  return (
    <View style={styles.container}>
      <View>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 22,
            color: 'white',
            marginBottom: 5,
          }}
        >
          My Coffees To See
        </Text>
        <FlatList
          data={numbersObjArray}
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          renderItem={({ item }) => (
            <View
              style={{
                paddingHorizontal: 0,
                marginBottom: 10,
                marginTop: 5,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Card
                style={{
                  width: 330,
                  height: '100%',
                  marginBottom: 5,
                  marginHorizontal: 5,
                  marginRight: 10,
                  justifyContent: 'center',
                }}
              >
                <Card.Title
                  title={item.name}
                  subtitle={item.age}
                  left={LeftContent}
                />
                <Card.Content style={{ flex: 1 }}>
                  <Title>{item.name}</Title>
                  <Paragraph>Age: {item.age}</Paragraph>
                </Card.Content>
                <Card.Cover
                  source={{ uri: item.pic }}
                  style={{ height: '100%', flex: 4 }}
                  resizeMode="stretch"
                />

                <Card.Actions
                  style={{
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flex: 1,
                  }}
                >
                  <Button onPress={() => navigation.navigate('Signup')}>
                    Cancel
                  </Button>
                  <Button onPress={() => navigation.navigate('Login')}>
                    ok
                  </Button>
                </Card.Actions>
              </Card>
            </View>

            //   <View style={{paddingHorizontal:29}}>
            //         {/* <Image
            //         style={{width:150,height:150,
            //         resizeMode:"contain"
            //         // marginHorizontal:5
            //     }}
            //         source={{uri:"https://cdn.pixabay.com/photo/2021/11/22/04/21/drink-6815800_1280.jpg"}}
            //     /> */}
            //       <Text style={{color:'white',fontWeight:'bold',fontSize:22}}> {item.pic}</Text>

            //     <Text style={{color:'white',fontWeight:'bold',fontSize:22}}>Name: {item.name}</Text>
            //     <Text style={{color:'white',fontWeight:'bold',fontSize:22}}>Age: {item.age}</Text>
            //     <Text style={{color:'white',fontWeight:'bold',fontSize:22}}>DOB: {item.dob}</Text>

            //        </View>
          )}
        />
      </View>
    </View>
  );
}
export { Scrolling };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    color: 'white',
    padding: 10,
    // backgroundColor:'blue'
  },
});
