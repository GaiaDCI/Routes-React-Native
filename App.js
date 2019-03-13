
import React from 'react';
import {
  View,
  Text
} from 'react-native';

import Routes from './components/Routes';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>App page</Text>
        <Routes />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10
  }
});
