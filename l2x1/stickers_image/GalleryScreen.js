
import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import CameraRollPicker from 'react-native-camera-roll-picker'; // package utilisé pour le module galerie

export default class GalleryScreen extends Component {
  static navigationOptions = { header: null };

  getSelectedImages(image) { //// cette fonction permet d'afficher les photos et images enregistrées dans le téléphone.
    if (image[0]) { this.props.navigation.navigate('Photo', { name: 'PhotoScreen' }); }
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <CameraRollPicker
        callback={uri => navigate('Photo', { name: 'PhotoScreen', data: uri })} // assertType permet de choisir si on veut faire apparaitre que des photos, des videos ou les deux simultanément dans la galerie.
        assertType="All"
        maximum={20}
      />
    );
  }
}


AppRegistry.registerComponent('GalleryScreen', () => GalleryScreen);
