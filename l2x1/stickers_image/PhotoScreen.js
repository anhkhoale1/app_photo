
import React from 'react';
import {
  ImageBackground,
  View,
  StyleSheet,
  CameraRoll,
} from 'react-native';
import ViewShot, { captureScreen } from 'react-native-view-shot';
import Icon from 'react-native-vector-icons/MaterialIcons';
import GestureTexte from './GestureTexte';
import GestureEmoji from './GestureEmoji';


const styles = StyleSheet.create({
  container: { flex: 1, flexDirection: 'column' },
  top: {
    flex: 1,
    height: 50,
    backgroundColor: 'black',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  image: {
    flex: 1,
  },
  bot: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    backgroundColor: 'black',
  },
  preview: {
    flex: 10,
  },
});

export default class PhotoScreen extends React.Component {
  static navigationOptions = { header: null };

  constructor(props) {
    super(props);
    this.state = {
      uri: this.props.navigation.state.params.data,
    };
  }

  screenShot = () => {
    this.refs.viewShot.capture().then(
      uri => CameraRoll.saveToCameraRoll(uri),
    );

    captureScreen({
      value: {
        format: 'jpg',
        quality: 1,
        result: 'data-uri',
      },
    });
  };

  render() {
    // Recupération des parametres
    const { navigate } = this.props.navigation;
    const texte = this.props.navigation.getParam('texte');
    const filtre = this.props.navigation.getParam('filtre');
    const emoji = this.props.navigation.getParam('emoji');
    const color = this.props.navigation.getParam('color');
    return (
      <View style={styles.container}>
        <View style={styles.top}>
          <Icon.Button name="share" size={30} color="#eee" backgroundColor="black" />
          <Icon.Button name="mood" size={30} onPress={() => navigate('Stickers', { data: this.state.uri })} color="#eee" backgroundColor="black" />
          <Icon.Button name="text-fields" size={30} onPress={() => navigate('EditeurDeTexte', { data: this.state.uri })} color="#eee" backgroundColor="black" />
          <Icon.Button name="photo-filter" size={30} onPress={() => navigate('Filter', { data: this.state.uri })} color="#eee" backgroundColor="black" />
        </View>
        <ViewShot style={styles.preview} ref="viewShot">
          <ImageBackground style={styles.image} source={{ uri: this.state.uri }}>
            <View style={{ flex: 1, backgroundColor: filtre }}>
              {GestureEmoji(emoji)}
              <GestureTexte texte={texte} color={color} />
            </View>
          </ImageBackground>
        </ViewShot>
        <View style={styles.bot}>
          <Icon.Button name="undo" size={40} onPress={() => navigate('Camera')} color="#eee" backgroundColor="black" />
          <Icon.Button name="done" size={40} onPress={this.screenShot} color="#eee" backgroundColor="black" />
        </View>
      </View>
    );
  }
}
