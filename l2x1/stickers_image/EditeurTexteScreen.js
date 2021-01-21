
import React from 'react';
import {
  Button, StyleSheet, View, Text, ImageBackground, Spacer, TextInput, TouchableOpacity,
} from 'react-native';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    fontSize: 25,
    color: 'white',
    padding: 15,
    borderRadius: 20,
    marginRight: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default class Editeurtexte extends React.Component {
  static navigationOptions = { header: null };

  constructor(props) {
    super(props);
    this.state = {
      isClicked: false,
      taille: 14,
      texte: null,
    };
  }

  _handlePress = (event) => {
    const { modalItemText } = this.state.modalItemText;
    this.setModalVisible(!this.state.modalVisible);
  }

  _onPressButton = () => {
    // If shown, hide, if hide, show
    if (this.state.isClicked === false) { this.setState({ isClicked: true }); }
    if (this.state.isClicked === true) { this.setState({ isClicked: false }); }
  }

  augTaille() {
    this.setState({
      taille: this.state.taille + 1,
    });
  }

  dimTaille() {
    this.setState({
      taille: this.state.taille - 1,
    });
  }

  render() {
    const { navigate } = this.props.navigation;
    // post of renderTextInput depends on its placement's order, possible to modify these components
    return (
      <View style={styles.container}>
        <TextInput
          style={{ fontSize: this.state.taille }}
          placeholder="Ajouter un texte"
          ref={(el) => { this.texte = el; }}
          onChangeText={texte => this.setState({ texte })}
          value={this.state.modalItemText}
        />

        <TouchableOpacity onPress={() => { this.dimTaille(); }}>
          <View style={{ width: 50, height: 30, backgroundColor: 'red' }}>
            <Text>  -</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => { this.augTaille(); }}>
          <View style={{ width: 50, height: 30, backgroundColor: 'green' }}>
            <Text>  +</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigate('Photo', { texte: this.state.texte })}
        >
          <Text>Hide Modal</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
