import { useState } from 'react';
import { Text, View, Button, TouchableOpacity } from 'react-native';
import { Parameter } from './pameter';
import Ionicons from '@expo/vector-icons/Ionicons';

const PropsState = ({ route }) => {
  const { itemId, username, Age, section, village } = route.params;

  const [count, setCount] = useState(0);

  const [show, setShow] = useState(false);
  return (
    <View style={{ padding: 20 }}>
      <Ionicons
        name="people"
        size={100}
        color="green"
        style={{ alignSelf: 'center' }}
      />
      <Text
        style={{
          alignSelf: 'center',
          fontSize: 28,
          marginBottom: 10,
          backgroundColor: 'red',
          color: 'white',
          paddingHorizontal: 30,
          padding: 15,
          borderRadius: 10,
        }}
      >
        {count}
      </Text>
      <Text style={{ fontSize: 28, marginBottom: 10 }}>
        itemId:
        {itemId}
      </Text>
      <Text style={{ fontSize: 28, marginBottom: 10 }}>Name : {username}</Text>
      <Text style={{ fontSize: 28, marginBottom: 10 }}>Age : {Age}</Text>
      <Text style={{ fontSize: 28, marginBottom: 10 }}>
        section : {section}
      </Text>

      <Button
        style={{ backgroundColor: 'red' }}
        onPress={() => {
          if (count >= 10 && count < 20) {
            setShow(true);
          } else {
            setShow(false);
          }
          setShow(true);
          setCount(count + 1);
        }}
        title="inc"
      ></Button>

      {show === true ? (
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
            const add = count - 1;
            setCount(add);
          }}
        >
          <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 18 }}>
            Decrese
          </Text>
        </TouchableOpacity>
      ) : (
        //
        <View />
      )}
    </View>
  );
};
export { PropsState };
