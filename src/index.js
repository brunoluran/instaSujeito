import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Header from './Header';
import Feed from './Feed';

export default () => {
  return (
    <SafeAreaView style={style.container}>
      <Header />
      <Feed />
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
