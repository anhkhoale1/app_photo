import React, {Component} from 'react';

import {
  AppRegistry, Text, View, ImageBackground, StyleSheet, Button ,
} from 'react-native';

// constante qui va prendre en valeur l'adresse de l'image séléctionné. Ici on va prendre une image sur internet pour tester.
// On peut aussi le mettre en tant que variable.
const fond = 'https://i.pinimg.com/originals/72/75/38/727538673ef8a884113e5c134e9bf228.jpg';

// On défini les constantes qui vont nous servir de filtre.
const redFilter = 'rgba(200,20,20,.2)';
const greenFilter = 'rgba(20,200,20,.2)';
const blueFilter = 'rgba(20,20,200,.2)';
const backFilter = 'rgba(0,0,0,0)';
const halfblack= 'rgba(0,0,0,.5)';


const styles = StyleSheet.create({
  container: {
    flex:1,
    width:'100%',
    height:'100%'
  },

  menufiltre: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    backgroundColor: 'black',
    height:40
  },


  button: {
    flex:1,
    paddingTop:30
  }

});

var Setblur=0;

export default class Filter extends React.Component {

  constructor(props){
      super(props) ;
      this.state = {
        ValueSwitch : backFilter,
        Setblur:0
      }
    }

  SetStateValueFunctionRed() {
      this.setState({
        ValueSwitch : redFilter,
        Setblur:2
      });
   }

   SetStateValueFunctionGreen() {
       this.setState({
         ValueSwitch : greenFilter,
         Setblur:3
       });
    }

  SetStateValueFunctionBlue() {
      this.setState({
        ValueSwitch: blueFilter,
        Setblur:0
      });
   }

  SetStateValueFunctionBack() {
      this.setState({
        ValueSwitch : backFilter,
        Setblur:0
      });
   }

   SetStateValueFunctionHalfBlack() {
       this.setState({
         ValueSwitch : halfblack,
         Setblur:0
       });
    }
// fonctions qui définient la couleur de chaque filtres, qu'on va utiliser dans le render afin de les afficher.
   render() {
       return (

         <ImageBackground source={{uri: fond}} style={styles.container} blurRadius={this.state.Setblur} >
           <View style={styles.menufiltre}>
             <Button style={styles.button} title='original' onPress={ this.SetStateValueFunctionBack.bind(this)}/>
             <Button style={styles.button} title='rouge' onPress={ this.SetStateValueFunctionRed.bind(this) }/>
             <Button style={styles.button} title='vert' onPress={ this.SetStateValueFunctionGreen.bind(this) }/>
             <Button style={styles.button} title='bleu' onPress={ this.SetStateValueFunctionBlue.bind(this) }/>
             <Button style={styles.button} title='halfblack' onPress={ this.SetStateValueFunctionHalfBlack.bind(this) }/>
           </View>
           <View style={{flex:1,backgroundColor: this.state.ValueSwitch}}>
           </View>
         </ImageBackground>

       );
     }
   }

AppRegistry.registerComponent('Filter', () => Filter);
