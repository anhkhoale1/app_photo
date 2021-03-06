import React, { Component } from 'react';
import { StyleSheet, View, Animated, PanResponder, ImageBackground } from 'react-native';
import icon from '../img/icon.png';
 export default class Gesture extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pan: new Animated.ValueXY(),
            scale: new Animated.Value(1)
        }
    }
    componentWillMount() {
        this._panResponder = PanResponder.create({
            onMoveShouldSetPanResponderCapture: () => true,
            onMoveShouldSetResponderCapture: () => true,
            onPanResponderGrant: (evt, gestureState) => {
                //Start moving
                this.state.pan.setOffset({
                    x: this.state.pan.x._value,
                    y: this.state.pan.y._value
                });
                //pan is a Vector. (x, y) = vector's coordinate
                this.state.pan.setValue({x: 0, y: 0});
                Animated.spring(
                    this.state.scale,
                    {toValue: 1.3, friction: 3}
                ).start();
            },
            onPanResponderMove: Animated.event([
                //Moving
                null,
                { dx: this.state.pan.x, dy: this.state.pan.y },  //dx, dy is gestureState
            ]),
            onPanResponderRelease: (evt, gestureState) => {
                // Call when stop moving
                this.state.pan.flattenOffset();
                Animated.spring(
                    this.state.scale,
                    {toValue: 1, friction: 3}
                ).start();
            }
        });
    }
    render() {
        return(<ImageBackground 
            source={require("../img/wallpaper.jpg")}
            style={styles.container1}>
            <Animated.Image
                source={icon} 
                style={[styles.animatedView,
                { transform: [
                    { translateX: this.state.pan.x },
                    { translateY: this.state.pan.y },
                    { scale: this.state.scale },
                ] }]}
                {...this._panResponder.panHandlers}
            >
            </Animated.Image>
        </ImageBackground>)
    }
 }

 const styles = StyleSheet.create({
     container: {
         flex: 1,
         marginVertical: 40
     },
     container1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      },
     animatedView: {
         height: 100,
         width: 100,
         position: 'absolute',
         borderRadius: 50,
         backgroundColor: 'blue'
     }
 })