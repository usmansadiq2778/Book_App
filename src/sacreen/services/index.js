import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { StatusBarIOS } from 'react-native';
import { AppRegistry, Platform } from 'react-native';
import { Button } from 'react-native-paper';
import { Signup } from '../signup';
import { Login } from '../login';
import { Profile } from '../profile';
import { Parameter } from '../pameter';
import { Scrolling } from '../scrool';
import { Forgat } from '../forgatpassword';
import { PropsState } from '../Props';
import { Logins } from '../logins';
import { Getdata } from '../Getfirebasedata';
// import { CameraComp } from '../camera';
import { CameraComp } from '../camera';
import App from './../../../App';
import { name as appName } from '../../../app.json';
import { Galleryimage } from '../galleryimage';
// import { transparent } from 'react-native-paper/lib/typescript/styles/colors';
if (Platform.OS == 'android') {
  registerRootComponent(App);
} else {
  AppRegistry.registerComponent(appName, () => App);
}
const NavContainer = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          options={{
            title: 'Login',
            headerStyle: {
              backgroundColor: 'green',

              // color: 'light',
            },
            headerTintColor: 'white',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
          component={Login}
        />
        <Stack.Screen name="CameraComp" component={CameraComp} />

        <Stack.Screen name="Logins" component={Logins} />
        <Stack.Screen name="Galleryimage" component={Galleryimage} />
        <Stack.Screen name="Parameter" component={Parameter} />
        <Stack.Screen name="PropsState" component={PropsState} />

        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Getdata" component={Getdata} />
        <Stack.Screen name="Scrolling" component={Scrolling} />

        <Stack.Screen name="Forgat" component={Forgat} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export { NavContainer };
