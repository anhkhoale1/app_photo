import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  AppRegistry,
  Button,
  Text,

} from 'react-native';


export default class App extends React.Component {

  render () {
      return (
        <View style={styles.MainContainer}>

        <Text style={styles.baseText}> Veuillez choisir un sticker en appuyant dessus {'\n'} </Text>
        <TouchableOpacity
        onPress={this.dwFile}
        activeOpacity={0.5}>
        <Image
          style={{ width: 80, height: 80 }}
          resizeMode="contain"
          source={{ uri: 'file:///Users/yousri/Desktop/reactnative/stickers/stickers/smile.png' }}
        />
        </TouchableOpacity>

        <TouchableOpacity
        onPress={this.dwFile}
        activeOpacity={0.5}>
        <Image
          style={{ width: 80, height: 80 }}
          resizeMode="contain"
          source={{ uri: 'file:///Users/yousri/Desktop/reactnative/stickers/stickers/love.png' }}
        />
        </TouchableOpacity>

        <TouchableOpacity
        onPress={this.dwFile}
        activeOpacity={0.5}>
        <Image
            style={{ width: 80, height: 80 }}
            resizeMode="contain"
            source={{ uri: 'file:///Users/yousri/Desktop/reactnative/stickers/stickers/mortderire.png' }}
        />
        </TouchableOpacity>

        <TouchableOpacity
        onPress={this.dwFile}
        activeOpacity={0.5}>
        <Image
          style={{ width: 80, height: 80 }}
          resizeMode="contain"
          source={{ uri: 'file:///Users/yousri/Desktop/reactnative/stickers/stickers/triste.png' }}
        />
        </TouchableOpacity>

        <TouchableOpacity
        onPress={this.dwFile}
        activeOpacity={0.5}>
        <Image
          style={{ width: 80, height: 80 }}
          resizeMode="contain"
          source={{ uri: 'file:///Users/yousri/Desktop/reactnative/stickers/stickers/choque.png' }}
        />
        </TouchableOpacity>

        <TouchableOpacity
        onPress={this.dwFile}
        activeOpacity={0.5}>
        <Image
          style={{ width: 80, height: 80 }}
          resizeMode="contain"
          source={{ uri: 'file:///Users/yousri/Desktop/reactnative/stickers/stickers/fache.png' }}
        />
        </TouchableOpacity>


        </View>
      );
       // déclaration de tous les stickers : on press correspond à l'appui à l'écran, le style pour leur taille à l'écran et la source pour chaque sticker
    }
}

const styles = StyleSheet.create({

  MainContainer: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  TextStyle: {
    color: '#ffffff',
    textAlign: 'center',
  },
  baseText: {
    fontSize: 20,
    fontFamily: 'Cochin',
  },
  titleText: {
    fontSize: 10,
    fontWeight: 'bold',
  },
});

//déclaration d'une constante qui définira le fond d'écran + la positions des stickers à l'écran

