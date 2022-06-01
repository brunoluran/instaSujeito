import React from 'react';
import {View, StyleSheet, Text, Pressable, Image} from 'react-native';

export default function Header() {
  return (
    <View style={style.container}>
      <Pressable>
        <Image
          style={style.logo}
          source={require('../assets/image/logo.png')}
        />
      </Pressable>
      <Pressable>
        <Image
          style={style.send}
          source={require('../assets/image/send.png')}
        />
      </Pressable>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    height: 55,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 15,
    paddingRight: 15,
    borderBottomWidth: 0.4,
    shadowColor: '#000',
    elevation: 2,
  },
  send: {
    width: 23,
    height: 23,
  },
});
