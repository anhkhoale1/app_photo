import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  AppRegistry,
  Button,
  Text,
  Share

} from 'react-native';


export default class App extends React.Component {

  constructor() {
        super();
        this.state = { inputValue: ''
      };

}

  ShareImage = () => {
  //Here is the Share API
  Share.share({ url: 'https://images.unsplash.com/photo-1540759786422-c60d5dc57d7b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=570bd0585a4b1b7b27c818f42e98b671&auto=format&fit=crop&w=350&q=80' })
    //after successful share return result
    .then(result => console.log(result))
    //If any thing goes wrong it comes here
    Share.open(ShareImage).catch(errorMsg => console.log(errorMsg));
 };

  render() {
    return (
      <View style={styles.MainContainer}>
        <Image
          style={{ width: 250, height: 250 }}
          resizeMode="contain"
          source={{ uri: 'https://images.unsplash.com/photo-1540759786422-c60d5dc57d7b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=570bd0585a4b1b7b27c818f42e98b671&auto=format&fit=crop&w=350&q=80' }}
        />
        <TouchableOpacity
        style={styles.button}
        onPress={this.ShareImage}
        activeOpacity={0.5}>
        <Text> Clique ici pour partager l'image </Text>
      </TouchableOpacity>
      </View>
    );
  }
}



const styles = StyleSheet.create({

  MainContainer: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: { // code pour avoir la main sur l'emplacement du button et de ses paramètres
    paddingTop: 10,
    paddingBottom: 10,
    marginTop: 400,
    width: '100%',
    backgroundColor: '#841584',
  },
  TextStyle: {
    color: '#ffffff',
    textAlign: 'center',
  },
});
