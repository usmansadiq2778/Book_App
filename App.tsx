import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

import { NavContainer } from './src/sacreen/services/index';

function App() {
  return <NavContainer />;
}

export default App;

// function HomeScreen({navigation}) {
//   return (

// <

//   )}
//   export App
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Home Screen</Text>
//       <Button
//         title="Go to Details"
//         onPress={() => {

//          navigation.navigate('Detail')
//       }}
//       />
//     </View>
//   );
// };

// function DetailScreen({navigation}) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Details Screen</Text>
//       <Button
//   title="Go to Details... again"
//   onPress={() => navigation.push('Home')}
// />
// <Button title="Go back" onPress={() => navigation.goBack()} />
// <Button
//         title="Go back to first screen in stack"
//         onPress={() => navigation.popToTop()}
//       />

//     </View>
//   );
// }

// const Stack = createNativeStackNavigator();

// export default function App() {
//   return (
//    <NavigationContainer>
// <Stack.Navigator>
// <Stack.Screen  name="Home"  component={HomeScreen} />
// <Stack.Screen name="Detail" component={DetailScreen} />
// </Stack.Navigator>

//    </NavigationContainer>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
