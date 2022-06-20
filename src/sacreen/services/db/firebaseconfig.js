import * as firebase from 'firebase';

import '@firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyB3NGpmxb5zxuaJbq3wtbBa5DGs22a-zdI',
  authDomain: 'mobile-app-17a32.firebaseapp.com',
  databaseURL: 'https://mobile-app-17a32-default-rtdb.firebaseio.com',
  projectId: 'mobile-app-17a32',
  storageBucket: 'mobile-app-17a32.appspot.com',
  messagingSenderId: '194241100413',
  appId: '1:194241100413:web:00ef8f6d1417f3589a4f14',
  measurementId: 'G-T1VN0NDE19',
};

// firebase ke liescence shuda invokation is needed only one time
// if (firebase.apps.length > 0 === false) {
//   firebase.initializeApp(firebaseConfig);
// }

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
export { firebase, firebaseConfig };
