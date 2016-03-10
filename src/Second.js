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


class Second extends Component {
  navThird() {
    this.props.navigator.push({
      name: 'third'
    })
  }
  _onPressBackButton() {
    if(this.props.navigator) {
      this.props.navigator.pop();
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>
          Second screen
        </Text>
        <TouchableHighlight onPress={this.navThird.bind(this)}>
          <Text>Navigate to Third screen</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={this._onPressBackButton.bind(this)}>
          <Text>Back to first screen</Text>
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

export default Second;
