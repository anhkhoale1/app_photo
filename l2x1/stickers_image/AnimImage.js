import React, {Component} from 'React';
import { Image } from 'react-native'
import Gestures from 'react-native-easy-gestures';
import photo from '../img/4.png'

export default class AnimImage extends Component {
    render() {
      return (
        <Gestures scalable={{ min: 0.1, max: 7 }}>
        <Image
          source={photo}
          style={{
            width: 200,
            height: 300,
          }}
        />
      </Gestures>
      );
    }
  }
