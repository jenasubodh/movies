import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import Router from './src/router/Router';

class Movies extends Component {
  render() {
    return(
      <Router />
    );
  }
}

AppRegistry.registerComponent('Movies', () => Movies);
