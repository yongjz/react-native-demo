'use strict';
import React, {
  Component,
  StyleSheet,
  Text,
  View,
  Image,
  ListView,
  Navigator
} from 'react-native';
import First from './First.js';
import Second from './Second.js';
import Third from './Third.js';
import MovieList from './MovieList.js';

class ReactNativeDemo extends Component {
  navigatorRenderScene(route, navigator) {
    switch (route.name) {
      case 'first':
        return (<First navigator={navigator} title="first"/>);
      case 'second':
        return (<Second navigator={navigator} title="second" />);
      case 'third':
        return (<Third navigator={navigator} title="third" />);
      case 'movies':
        return (<MovieList navigator={navigator} title="movies" />);
    }
  }

  render() {
    return (
      <Navigator
        initialRoute={{name: 'first'}}
        renderScene={this.navigatorRenderScene}
      />
    );
  }
}

export default ReactNativeDemo;
