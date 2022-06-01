import React from 'react';
import {View, FlatList, StyleSheet, Text, Image} from 'react-native';
import listaFeed from './listaFeed';
import RenderFeed from './renderFeed';

export default () => {
  return (
    <View style={style.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={listaFeed}
        renderItem={({item}) => <RenderFeed data={item} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
});
