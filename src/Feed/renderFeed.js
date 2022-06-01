import React from 'react';
import {View, Text, Image, StyleSheet, Pressable} from 'react-native';

export default function RenderFeed({data}) {
  const loadIcon = likeada => {
    return likeada
      ? require('../assets/image/likeada.png')
      : require('../assets/image/like.png');
  };

  const showLike = likers => {
    if (likers === 0) {
      return;
    }

    return (
      <Text style={style.likes}>
        {likers} {likers > 1 ? 'curtidas' : 'curtida'}
      </Text>
    );
  };

  return (
    <View>
      <View style={style.viewPerfil}>
        <Image style={style.userPhoto} source={{uri: data.imgperfil}} />
        <Text style={style.userName}>{data.nome}</Text>
      </View>
      <Image
        style={style.post}
        source={{uri: data.imgPublicacao}}
        resizeMode="cover"
      />
      <View style={style.btnArea}>
        <Pressable>
          <Image source={loadIcon(data.likeada)} style={style.iconLike} />
        </Pressable>
        <Pressable style={style.commentBtn}>
          <Image
            source={require('../assets/image/comment.png')}
            style={style.iconLike}
          />
        </Pressable>
        <Pressable style={style.sendBtn}>
          <Image
            source={require('../assets/image/send.png')}
            style={style.iconLike}
          />
        </Pressable>
      </View>
      {showLike(data.likers)}
      <Text style={style.footerName}>{data.nome}</Text>
      <Text style={style.footerDesc}>{data.descricao}</Text>
    </View>
  );
}

const style = StyleSheet.create({
  viewPerfil: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    padding: 8,
  },
  userPhoto: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  userName: {
    paddingLeft: 5,
    fontSize: 22,
    color: '#000',
  },
  post: {
    height: 400,
    alignItems: 'center',
  },
  btnArea: {
    flexDirection: 'row',
    padding: 5,
  },
  iconLike: {
    width: 25,
    height: 25,
  },
  commentBtn: {
    paddingLeft: 5,
  },
  sendBtn: {
    paddingLeft: 5,
  },
  likes: {
    fontWeight: 'bold',
    marginLeft: 5,
    color: '#000',
  },
  footerName: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingLeft: 5,
    color: '#000',
  },
  footerDesc: {
    paddingLeft: 5,
    paddingBottom: 10,
    fontSize: 15,
    color: '#666',
  },
});
