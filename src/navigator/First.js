'use strict';
import React, {
  Component,
  StyleSheet,
  Text,
  View,
  Image,
  ListView,
  Navigator,
  TouchableHighlight
} from 'react-native';

class First extends React.Component{
  navSecond() {
    this.props.navigator.push({
      name: 'second'
    })
  }

  _onPressBackButton() {
    this.props.navigator.push({
      name: 'movies'
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>
          First screen
        </Text>
        <TouchableHighlight onPress={this.navSecond.bind(this)}>
          <Text>Navigate to second screen</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={this._onPressBackButton.bind(this)}>
          <Text>Back to movie screen</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

export default First;
