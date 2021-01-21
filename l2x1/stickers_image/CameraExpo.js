import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import { ImagePicker, Permissions } from 'expo'; // les apis utilisés pour ce code


/* Utilisation de la caméra avec l'api Expo seulement */

export default class App extends React.Component {
  state = {
    image: null,
  };

  selectPicture = async () => { // fonction qui permet de selectionner une ohoto via la galerie de l'application
    await Permissions.askAsync(Permissions.CAMERA);
    const { cancelled, uri } = await Expo.ImagePicker.launchImageLibraryAsync({
      aspect: 1,
      allowsEditing: true,
    });
if (!cancelled) this.setState({ image: uri });
  };

  takePicture = () => { // fonction qui permet de prendre une photo via l'écran principal (menu)
        if (this.camera) {
            this.camera.takePictureAsync()
                .then(data => this.props.navigation.goBack())
        }
    }
    this.setState({ image: uri });
  };

  render() { // le code qui est ici est ce qui est affiché à l'écran
    return (
      <View style={styles.container}>
        <Image style={styles.image} source={{ uri: this.state.image }} />
        <View style={styles.row}>
          <Button onPress={this.selectPicture}>Gallery</Button>
          <Button onPress={this.takePicture}>Camera</Button>
        </View>
      </View>
    );
  }
}

const Button = ({ onPress, children }) => ( // déclaration d'un boutton 
  <TouchableOpacity style={styles.button} onPress={onPress}>
    <Text style={styles.text}>{children}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({ // ces fonctions permettent de modifier les paramètres des images et textes
  text: {
    fontSize: 21,
  },
  row: { flexDirection: 'row' },
  image: { width: 300, height: 300, backgroundColor: 'gray' },
  button: {
    padding: 13,
    margin: 15,
    backgroundColor: '#dddddd',
  },
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
