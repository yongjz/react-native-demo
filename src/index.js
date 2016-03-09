'use strict';
import React, {
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

class ReactNativeDemo extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Init a react native project.
        </Text>
        <Text style={styles.instructions}>
          To get started, edit src/index.js
        </Text>
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
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default ReactNativeDemo;