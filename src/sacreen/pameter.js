import {
  StyleSheet,
  // Image,
  // SafeAreaView,
  // Button,
  // TextInput,
  TouchableOpacity,
  Text,
  FlatList,
  // FlatGrid,
  Alert,
  View,
  // ImageBackground,
} from 'react-native';
// import { Scrolling } from './scrool';
import axios from 'axios';
import { Avatar } from 'react-native-paper';
import { useState, useEffect } from 'react';
// import { useMemo } from 'react';

function Parameter({ navigation, route }) {
  const { itemId, username, Age, section, village } = route.params;
  const { userEmail, userPasword } = route.params;
  const { Email, Password } = route.params;
  const [users, setUsers] = useState([]);
  // const memoizedValue = useMemo(() => renderItem, [productsState.product]);
  const [data, setData] = useState(null);
  const [posts, setPosts] = useState(null);
  useEffect(() => {
    axios
      .get('https://api.github.com/users')
      .then((response) => {
        if (response.data) {
          // console.log(response.data);
          setUsers(response.data);
          // console.log(response.data);
        }
      })
      .catch((error) => {
        Alert.alert('❌', 'connot find data ');
      });
  }, []);

  // axios
  //   .get('https://api.github.com/users')
  //   .then((response) => {
  //     if (response.data) {
  //       // console.log(response.data);
  //       setUsers(response.data);
  //       // console.log(response.data);
  //     }
  //   })
  //   .catch((error) => {
  //     Alert.alert('❌', 'connot find data ');
  //   });
  // // const memoizedValue = useMemo(() => renderItem, [users]);
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={() => {
        navigation.navigate('Profile', { userDetails: item });
      }}
    >
      <Avatar.Image size={60} source={{ uri: item.avatar_url }} />
      <Text
        style={{
          fontWeight: 'bold',
          textTransform: 'uppercase',
          color: 'blue',
        }}
      >
        {item.login}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View>
        <Text>{userEmail}</Text>
        <Text>{Email}</Text>

        <FlatList
          // isMounted={false}
          // keyExtractor={keyExtractor}
          data={users}
          // keyExtractor={(users) => users.id}
          renderItem={renderItem}
          // renderItem={({ item }) => (
          //   <TouchableOpacity
          //     style={styles.itemContainer}
          //     onPress={() => {
          //       navigation.navigate('Profile', { userDetails: item });
          //     }}
          //   >
          //     <Avatar.Image size={50} source={{ uri: item.avatar_url }} />
          //     <Text style={{ fontWeight: 'bold' }}>{item.login}</Text>
          //   </TouchableOpacity>
          // )}
        />
      </View>
      {/* <View style={{ marginTop: 40 }}>
        <Text style={{ fontSize: 25, fontWeight: 'bold' }}>
          UserName: {username}
        </Text>
        <Text style={{ fontSize: 25, fontWeight: 'bold' }}>ID : {itemId}</Text>
        <Text style={{ fontSize: 25, fontWeight: 'bold' }}>Age : {Age}</Text>
        <Text style={{ fontSize: 25, fontWeight: 'bold' }}>
          section : {section}
        </Text>
        <Text style={{ fontSize: 25, fontWeight: 'bold' }}>
          village : {village}
        </Text>
      </View> */}

      {/* <View style={{ padding: 22 }}>
        <Text style={{ fontSize: 35, fontWeight: 'bold' }}>
          Email : {userEmail}
        </Text>
        <Text style={{ fontSize: 45, fontWeight: 'bold' }}>
          Password : {userPasword}
        </Text>
        <Text style={{ fontSize: 35, fontWeight: 'bold' }}>
          Email : {Email}
        </Text>
        <Text
          style={{
            fontSize: 35,
            fontWeight: 'bold',
            color: 'white',
            alignSelf: 'flex-start',
          }}
        >
          Password : {Password}
        </Text>
      </View> */}
      <TouchableOpacity onPress={() => navigation.navigate('Scrolling')}>
        <Text style={{ color: 'white', backgroundColor: 'green', padding: 22 }}>
          Sacroll here
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          background: 'red',
          justifyContent: 'center',
          alignSelf: 'center',
          marginTop: 15,
          padding: 15,
          paddingHorizontal: 29,
          borderRadius: 17,
        }}
        onPress={() => {
          navigation.navigate('PropsState', {
            itemId: Math.floor(Math.random() * 100),
            username: 'usman sadiq',
            Age: 22,
            section: 'Bs - cs',
            village: '248 rb Faisalabad',
          });
        }}
      >
        <Text style={styles.loginText}> Login </Text>
      </TouchableOpacity>
    </View>
  );
}
export { Parameter };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'blue',
    // justifyContent: 'center',
    // alignItems: 'center',
    flexDirection: 'column',
    padding: 19,
    backgroundColor: 'white',
  },
  itemContainer: {
    flexDirection: 'row',
    padding: 15,
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'gray',
    margin: 15,

    // justifyContent:'center',
    // alignItems:'center',
    // padding:10,
    // borderWidth:1
  },
});
