
import React, { Component } from 'react';
import {
  StyleSheet, View, AppRegistry,
} from 'react-native';
import { RNCamera } from 'react-native-camera';
import Icon from 'react-native-vector-icons/MaterialIcons';
import GestureTexte from './GestureTexte';
import GestureEmoji from './GestureEmoji';

const flashModeOrder = {
  off: 'on',
  on: 'auto',
  auto: 'torch',
  torch: 'off',
};

const styles = StyleSheet.create({
  top: {
    flex: 1,
    height: 50,
    backgroundColor: 'black',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  bot: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'black',
  },
});
export default class CameraScreen extends Component {
  static navigationOptions = { header: null };

  constructor(props) {
    super(props);

    this.state = {
      flash: 'auto',
      type: 'back',
    };
  }


    takePhoto = async () => {
      const optionsBack = {
        quality: 1.0,
        fixOrientation: true,
        base64: true,
        width: 300,
        height: 300,
        orientation: 'portrait',
      };
      const optionsFront = {
        fixOrientation: true,
        base64: true,
        width: 300,
        height: 300,
        mirrorImage: true,
        orientation: 'portrait',
      };
      // Recupération des parametres
      const { navigate, getParam } = this.props.navigation;
      const texte = getParam('texte');
      const filtre = getParam('filtre');
      const emoji = getParam('emoji');
      const color = getParam('color');
      // Si la camera dorsale est activé, alors pas besoin de retourner le mirroir de la photo
      const data = await this.camera.takePictureAsync((this.state.type === 'back' ? optionsBack : optionsFront));
      navigate('Photo', {
        data: data.uri, emoji, texte, color, filtre,
      });
    }

  // Si la camera dorsale est activé, alors elle affiche la camera dorsale
  // sinon elle affiche la frontale
  changeCamera = () => {
    this.setState(
      prevState => ({ type: prevState.type === 'back' ? 'front' : 'back' }),
    );
  }

  // Modifie le flash
  changeFlash = () => {
    this.setState(
      prevState => ({ flash: flashModeOrder[prevState.flash] }),
    );
  }

  render() {
    const { navigate,getParam } = this.props.navigation;
    // Recupération des parametres
    const texte = getParam('texte');
    const emoji = getParam('emoji');
    const color = getParam('color');
    const uri = null;
    const title = this.state;
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.top}>
          <Icon.Button name="settings" size={30} color="#eee" backgroundColor="black" />
          <Icon.Button name="mood" size={30} onPress={() => navigate('Stickers', { data: uri })} color="#eee" backgroundColor="black" />
          <Icon.Button name="flash-auto" size={30} onPress={this.changeFlash} color="#eee" backgroundColor="black" />
          <Icon.Button name="text-fields" onPress={() => navigate('EditeurDeTexte', { data: uri })} size={30} color="#eee" backgroundColor="black" />
          <Icon.Button name="photo-filter" onPress={() => navigate('Filter', { data: uri })} size={30} color="#eee" backgroundColor="black" />
        </View>
        <RNCamera
          ref={(ref) => {
            this.camera = ref;
          }}
          style={{ flex: 10 }}
          type={title.type}
          flashMode={title.flash}
          permissionDialogTitle="Permission d'utiliser la caméra"
          permissionDialogMessage="Nous avons besoin de votre persmission pour utiliser la caméra"
          onGoogleVisionBarcodesDetected={() => {}}
        >
          {GestureEmoji(emoji)}
          <GestureTexte texte={texte} color={color} />
        </RNCamera>
        <View style={styles.bot}>
          <Icon.Button onPress={() => navigate('Gallery', { name: 'GalleryScreen' })} name="collections" size={30} color="#eee" backgroundColor="black" />
          <Icon.Button onPress={this.takePhoto} name="camera" size={35} color="#eee" backgroundColor="#000" />
          <Icon.Button onPress={this.changeCamera} name="switch-camera" size={30} color="#eee" backgroundColor="black" />
        </View>
      </View>
    );
  }
}

AppRegistry.registerComponent('CameraScreen', () => CameraScreen);
