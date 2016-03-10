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

class Third extends React.Component{
  _onPressBackButton() {
    if(this.props.navigator) {
      this.props.navigator.pop();
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>
          Third screen
        </Text>
        <TouchableHighlight onPress={this._onPressBackButton.bind(this)}>
          <Text>Back to second screen</Text>
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

export default Third;
