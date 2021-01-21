import React from 'react'
import { Button, StyleSheet, View, Text, ImageBackground, Spacer, TextInput, TouchableOpacity } from 'react-native'
import Gestures from 'react-native-easy-gestures'
export default class Editeurtexte extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isClicked : false,
      taille: 20,
      text: '',
      color:'rgb(0,0,0)'
    };
  }
  colorRed(){
    this.setState({
      color: 'red'
    })
  }
  colorPink(){
    this.setState({
      color: 'pink'
    })
  }
  colorBlue(){
    this.setState({
      color: 'blue'
    })
  }
  colorGreen(){
    this.setState({
      color: 'green'
    })
  }
  colorYellow(){
    this.setState({
      color: 'yellow'
    })
  }
  colorBlack(){
    this.setState({
      color: 'black'
    })
  }
  colorWhite(){
    this.setState({
      color: 'white'
    })
  }

  _onPressButton = () => {
    // If shown, hide, if hide, show
    if (this.state.isClicked == false)
      this.setState({isClicked : true});
    if (this.state.isClicked == true)
      this.setState({isClicked : false});
  }

  renderTextInput() {
    // If the state isClicked = true then show the TextInput
    if (this.state.isClicked)
      return(
        <Gestures scalable={{ min: 0.1, max: 7 }}>    
        <TextInput style={{fontSize: this.state.taille}}
          onChangeText={(text) => this.setState({text})}
          placeholder={"Ajouter text ici"}
          value={this.state.text}
      />
        </Gestures>
      );
    else return null;
  }

  augTaille(){
    this.setState({
      taille: this.state.taille + 1
    })
  }
  dimTaille(){
    this.setState({
      taille: this.state.taille - 1
    })
  }

  render() {
    // position of renderTextInput depends on its placement's order, possible to modify these components
    return (
      <ImageBackground
        source={require("../img/android.png")}
        style={styles.container}>
        <Button
          style={styles.button}
          onPress={this._onPressButton}
          title="Text"
        />
        {this.renderTextInput()}

        <TouchableOpacity onPress={()=>{this.dimTaille()}}>
          <View style={{width: 50, height: 30, backgroundColor: 'red'}}>
           <Text>  -</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>{this.augTaille()}}>
          <View style={{width: 50, height: 30, backgroundColor: 'green'}}>
           <Text>  +</Text>
          </View>
        </TouchableOpacity>
        <View style={{flexDirection:'row'}}>
            <Button title='Red' onPress={this.colorRed.bind(this)} color='red'/>
            <Button title='Pink' onPress={this.colorPink.bind(this)} color='pink'/>
            <Button title='Blue' onPress={this.colorBlue.bind(this)} color='blue'/>
            <Button title='Green' onPress={this.colorGreen.bind(this)} color='green'/>
            </View>
            <View style={{flexDirection:'row'}}>
            <Button title='Yellow' onPress={this.colorYellow.bind(this)} color='yellow'/>
            <Button title='Black' onPress={this.colorBlack.bind(this)} color='black'/>
            <Button title='White' onPress={this.colorWhite.bind(this)} color='white'/>
        </View>
      </ImageBackground>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    fontSize: 25,
    color: 'white',
    padding: 15,
    borderRadius: 20,
    marginRight: 0,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
