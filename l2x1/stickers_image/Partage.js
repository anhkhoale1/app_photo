import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  AppRegistry,
  Button,
  Text,
  Platform,
  NativeModules,

} from 'react-native';

// import invariant from 'fbjs/lib/invariant';

import MultiShare from 'react-native-multi-share';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      visible: false
    }
  }

async onShare() {

 await MultiShare.share({ images: ['https://images.unsplash.com/photo-1540759786422-c60d5dc57d7b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=570bd0585a4b1b7b27c818f42e98b671&auto=format&fit=crop&w=350&q=80'] });

}
/*
static showShareActionSheetWithOptions(
    options: Object,
    failureCallback: Function,
    successCallback: Function,
  ) {
    invariant(
      typeof options === 'object' && options !== null,
      'Options must be a valid object',
    );
    invariant(
      typeof failureCallback === 'function',
      'Must provide a valid failureCallback',
    );
    invariant(
      typeof successCallback === 'function',
      'Must provide a valid successCallback',
    );
    MultiShareModule.showShareActionSheetWithOptions(
      {...options, tintColor: processColor(options.tintColor)},
      failureCallback,
      successCallback,
    );
  }


  static share(content: Content, options: Options = {}): Promise<Object> {
    invariant(
      typeof content === 'object' && content !== null,
      'Content to share must be a valid object'
    );
    invariant(
      typeof content.url === 'string'
      || typeof content.message === 'string'
      || Array.isArray(content.images),
      'At least one of URL and message and images is required'
    );
    invariant(
      typeof options === 'object' && options !== null,
      'Options must be a valid object'
    );

    if (Platform.OS === 'android') {
      invariant(
        !content.title || typeof content.title === 'string' || Array.isArray(content.images),
        'At least one of title and images is required.'
      );
      return MultiShareModule.share(content, options.dialogTitle);
    } else if (Platform.OS === 'ios') {
      return new Promise((resolve, reject) => {
        this.showShareActionSheetWithOptions(
          {...content, ...options, tintColor: processColor(options.tintColor)},
          (error) => reject(error),
          (success, activityType) => {
            if (success) {
              resolve({
                'action': 'sharedAction',
                'activityType': activityType
              });
            } else {
              resolve({
                'action': 'dismissedAction'
              });
            }
          }
        );
      });
    } else {
      return Promise.reject(new Error('Unsupported platform'));
    }
  }

  /**
   * The content was successfully shared.
   */
/*
  static get sharedAction(): string { return 'sharedAction'; }

  /**
   * The dialog has been dismissed.
   * @platform ios
   */
/*
  static get dismissedAction(): string { return 'dismissedAction'; }

*/

render() {
  return (
    <View style={styles.MainContainer}>
      <Image
        style={{ width: 250, height: 250 }}
        resizeMode="contain"
        source={{ uri: 'https://images.unsplash.com/photo-1540759786422-c60d5dc57d7b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=570bd0585a4b1b7b27c818f42e98b671&auto=format&fit=crop&w=350&q=80' }}
      />
      <TouchableOpacity
      style={styles.button}
      onPress={this.onShare}
      activeOpacity={0.5}>
      <Text> Clique ici pour partager l'image </Text>
    </TouchableOpacity>
    </View>
  );
}

}



const styles = StyleSheet.create({

MainContainer: {
  flex: 1,
  backgroundColor: '#ffffff',
  alignItems: 'center',
  justifyContent: 'center',
},
button: { // code pour avoir la main sur l'emplacement du button et de ses paramètres
  paddingTop: 10,
  paddingBottom: 10,
  marginTop: 400,
  width: '100%',
  backgroundColor: '#841584',
},
TextStyle: {
  color: '#ffffff',
  textAlign: 'center',
},
});
