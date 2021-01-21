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
  
 //déclaration d'une constante qui va pouvoir définir l'emplacement à l'écran des bouttons et de la zone de texte

});
export default class Editeurtexte extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
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
  colorPurple(){
    this.setState({
      color : 'purple'
    })
  }

// fonctions qui définient chaque couleur

  render() {

    return (
      <View style={styles.container}>
        <TextInput
          style={{ fontSize: this.state.taille, color : this.state.color}}
          placeholder="Ajouter un texte"
          ref={(el) => { this.texte = el; }}
          onChangeText={texte => this.setState({ texte })}
          value={this.state.modalItemText}
        />
        <View style={{flexDirection:'row',padding:10}}>
            <Button title='Red' onPress={this.colorRed.bind(this)} color='red'/>
            <Button title='Pink' onPress={this.colorPink.bind(this)} color='pink'/>
            <Button title='Blue' onPress={this.colorBlue.bind(this)} color='blue'/>
            <Button title='Green' onPress={this.colorGreen.bind(this)} color='green'/>
        </View>
        <View style={{flexDirection:'row',padding:10}}>
            <Button title='Yellow' onPress={this.colorYellow.bind(this)} color='yellow'/>
            <Button title='Black' onPress={this.colorBlack.bind(this)} color='black'/>
            <Button title='White' onPress={this.colorWhite.bind(this)} color='white'/>
            <Button title='Purple' onPress={this.colorPurple.bind(this)} color='purple'/>
        </View>

      </View>
    );
    
    // création au rendu de l'écran les bouttons et la zone de texte.
  }
}
