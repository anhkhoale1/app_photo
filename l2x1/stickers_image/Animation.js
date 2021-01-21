import React, { Component } from 'react';
import {
  Image,
  StyleSheet,
} from 'react-native';
import PinchZoomView from 'react-native-pinch-zoom-view';

export default class Example extends Component {
  render() {
    return (
      <PinchZoomView maxScale={3}>
          <Image source={require("../img/4.png")}
              style={styles.image} />    
      </PinchZoomView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    height: 100,
    width: 100,
    position: 'absolute',
    borderRadius: 50,
}
});