import React, { Component } from 'react';

import { StyleSheet, Text, View, ImageBackground, Button, Platform,AppRegistry,TouchableOpacity,CameraRoll, Image } from 'react-native';
import ViewShot, { captureScreen }  from "react-native-view-shot";

const imgtest= 'https://i.pinimg.com/236x/70/33/69/703369094adcf0f02a719d787b8c9d88.jpg';


export default class PhotoScreen extends React.Component {

constructor(){

    super();

    this.state={

      imageURI : imgtest,

    }
  }

  onImageLoad = () => {
      this.refs.viewShot.capture().then(uri => {
        console.log("saved to ",uri);
        CameraRoll.saveToCameraRoll(uri);
      })

      captureScreen({
        value:  {
        format: "jpg",
        quality: 0.8,
        result: "data-uri"
        }
      })
    };

// fonction qui définie la qualité de la capture d'écran pour la photo, son format et le retour.

  render() {


    return (
      <View style={{flex:1}}>
      <View>
        <Button title="Press here to save" onPress={this.onImageLoad} />
      </View>
      <ViewShot ref="viewShot" >
       <Image source={{uri: imgtest}} style={{width: '100%', height: '100%', resizeMode: 'cover'}} />
      </ViewShot>

      </View>
  );
  }
}


AppRegistry.registerComponent('PhotoScreen', () => PhotoScreen);
