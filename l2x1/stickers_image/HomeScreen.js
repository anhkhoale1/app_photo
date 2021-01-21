import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  AppRegistry,
  Button,
  Text,
  Share,

} from 'react-native';


const styles = StyleSheet.create({

  MainContainer: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    paddingTop: 10,
    paddingBottom: 10,
    marginTop: 40,
    width: '100%',
    backgroundColor: '#841584',
  },
  TextStyle: {
    color: '#ffffff',
    textAlign: 'center',
  },
});

export default class HomeScreen extends React.Component {
  static navigationOptions = { header: null };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.MainContainer}>
        <Image
          style={{ width: 350, height: 350 }}
          resizeMode="contain"
          source={require('./icone/icone.jpeg')}
        />
        <TouchableOpacity
          onPress={() => navigate('Camera', { name: 'CameraScreen' })}
          activeOpacity={0.5}
        >
          <Image
            style={{ width: 120, height: 120 }}
            resizeMode="contain"
            source={require('./icone/camera.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigate('Gallery', { name: 'GalleryScreen' })}

          activeOpacity={0.5}
        >
          <Image
            style={{ width: 120, height: 120 }}
            resizeMode="contain"
            source={require('./icone/galleryicone.png')}
          />
        </TouchableOpacity>
      </View>
    );
  }
}


AppRegistry.registerComponent('HomeScreen', () => HomeScreen);
