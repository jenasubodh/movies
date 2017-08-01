import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import MovieList from './src/components/MovieList';

class Trending extends Component {
  static navigationOptions = {
    title: 'Trending',
  };
  render() {
    return (
      <View style={styles.container}>
        <MovieList/>
      </View>
    );
  }
}

const Movies = StackNavigator({
  Trending: { screen: Trending },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  }
});

AppRegistry.registerComponent('Movies', () => Movies);
