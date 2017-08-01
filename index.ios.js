import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View
} from 'react-native';
import MovieList from './src/components/MovieList';

export default class Movies extends Component {
  render() {
    return (
      <View style={styles.container}>
        <MovieList/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  }
});

AppRegistry.registerComponent('Movies', () => Movies);
