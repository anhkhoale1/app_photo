
import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './compoments/HomeScreen';
import CameraScreen from './compoments/CameraScreen';
import GalleryScreen from './compoments/GalleryScreen';
import EditeurTexteScreen from './compoments/EditeurTexteScreen';
import FilterScreen from './compoments/FiltreScreen';
import StickersScreen from './compoments/StickersScreen';
import PhotoScreen from './compoments/PhotoScreen';

const MainNavigator = createStackNavigator({
  Home: { screen: HomeScreen },
  Camera: { screen: CameraScreen },
  Gallery: { screen: GalleryScreen },
  Photo: { screen: PhotoScreen },
  Filter: { screen: FilterScreen },
  EditeurDeTexte: { screen: EditeurTexteScreen },
  Stickers: { screen: StickersScreen },
});

const App = createAppContainer(MainNavigator);

export default App;
