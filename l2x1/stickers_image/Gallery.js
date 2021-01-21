import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ImageView,
  } from 'react-native';


import CameraRollPicker from 'react-native-camera-roll-picker'; // package utilisé pour le module galerie

export default class PhotoDeluxe extends Component {

  getSelectedImages(image){ // cette fonction permet d'afficher les photos et images enregistrées dans le téléphone.
      if (image[0])
          alert(image[0].uri);  

      }
  render() {
      return(
          <CameraRollPicker callback= {this.getSelectedImages}
          assertType='All' maximum={5}/> // assertType permet de choisir si on veut faire apparaitre que des photos, des videos ou les deux simultanément dans la galerie.
          );                            
      }
}


AppRegistry.registerComponent('PhotoDeluxe', () => PhotoDeluxe);
