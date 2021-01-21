import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';

const smile = require('./stickers_image/smile.png');
const love = require('./stickers_image/love.png');
const mortderire = require('./stickers_image/mortderire.png');
const triste = require('./stickers_image/triste.png');
const choque = require('./stickers_image/choque.png');
const fache = require('./stickers_image/fache.png');

//déclaration de constantes pour récupérer les images

const styles = StyleSheet.create({

  MainContainer: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

//déclaration d'une constante qui définira le fond d'écran + la positions des stickers à l'écran

export default class StickersScreen extends React.Component {
  static navigationOptions = { header: null };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.MainContainer}>

        <TouchableOpacity
          onPress={() => navigate('Photo', { emoji: smile })}
          activeOpacity={0.5}
        >
          <Image
            style={{ width: 80, height: 80 }}
            resizeMode="contain"
            source={(smile)}
          />

        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigate('Photo', { emoji: love })}
          activeOpacity={0.5}
        >
          <Image
            style={{ width: 80, height: 80 }}
            resizeMode="contain"
            source={(love)}
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigate('Photo', { emoji: mortderire })}
          activeOpacity={0.5}
        >
          <Image
            style={{ width: 80, height: 80 }}
            resizeMode="contain"
            source={(mortderire)}
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigate('Photo', { emoji: triste })}
          activeOpacity={0.5}
        >
          <Image
            style={{ width: 80, height: 80 }}
            resizeMode="contain"
            source={(triste)}
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigate('Photo', { emoji: choque })}
          activeOpacity={0.5}
        >
          <Image
            style={{ width: 80, height: 80 }}
            resizeMode="contain"
            source={(choque)}
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigate('Photo', { emoji: fache })}
          activeOpacity={0.5}
        >
          <Image
            style={{ width: 80, height: 80 }}
            resizeMode="contain"
            source={(fache)}
          />
        </TouchableOpacity>


      </View>
    );
    // déclaration de tous les stickers : on press correspond à l'appui à l'écran, le style pour leur taille à l'écran et la source pour chaque sticker
}
