
import React, { Component } from 'react';

import {
  AppRegistry, Text, View, ImageBackground, StyleSheet, Button, TouchableOpacity,
} from 'react-native';


// On dÃ©fini les constantes qui vont nous servir de filtre.
const redFilter = 'rgba(200,20,20,.2)';
const greenFilter = 'rgba(20,200,20,.2)';
const blueFilter = 'rgba(20,20,200,.2)';
const backFilter = 'rgba(0,0,0,0)';
const halfblack = 'rgba(0,0,0,.5)';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
  },

  menufiltre: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    backgroundColor: 'black',
    height: 40,
  },

  button: {
    flex: 1,
    paddingTop: 30,
  },

});

const Setblur = 0;

export default class FilterScreen extends React.Component {
  static navigationOptions = { header: null };

  constructor(props) {
    super(props);
    this.state = {
      ValueSwitch: backFilter,
      resultBack: false,
      Setblur: 0,
      uri: this.props.navigation.state.params.data,
    };
  }

  SetStateValueFunctionRed() {
    this.setState({
      ValueSwitch: redFilter,
      Setblur: 0,
    });
  }

  SetStateValueFunctionGreen() {
    this.setState({
      ValueSwitch: greenFilter,
      Setblur: 0,
    });
  }

  SetStateValueFunctionBlue() {
    this.setState({
      ValueSwitch: blueFilter,
      Setblur: 0,
    });
  }

  SetStateValueFunctionBack() {
    this.setState({
      ValueSwitch: backFilter,
      Setblur: 0,
    });
  }

  SetStateValueFunctionHalfBlack() {
    this.setState({
      ValueSwitch: halfblack,
      Setblur: 0,
    });
  }

  goBack = (valueFilter) => {
    this.state.resultBack = true;
    if (this.state.resultBack === true) this.props.navigation.navigate('Photo', { name: 'PhotoScreen', data: this.state.uri, filtre: valueFilter });
  }


  render() {
    //   let filtre = this.props.navigation.getParam('filtre');
    return (

      <ImageBackground source={{ uri: this.state.uri }} style={styles.container} blurRadius={this.state.Setblur}>
        <View style={styles.menufiltre}>
          <Button style={styles.button} title="original" onPress={() => this.props.navigation.navigate('Photo', {filtre: backFilter })} />
          <Button style={styles.button} title="rouge" onPress={() => this.props.navigation.navigate('Photo', {filtre: redFilter })} />
          <Button style={styles.button} title="vert" onPress={() => this.props.navigation.navigate('Photo', {filtre: greenFilter })} />
          <Button style={styles.button} title="bleu" onPress={() => this.props.navigation.navigate('Photo', {filtre: blueFilter })} />
          <Button style={styles.button} title="halfblack" onPress={() => this.props.navigation.navigate('Photo', {filtre: halfblack })} />
        </View>
        <View style={{ flex: 1 /* backgroundColor: filtre */ }} />
      </ImageBackground>

    );
  }
}

AppRegistry.registerComponent('FilterScreen', () => FilterScreen);
