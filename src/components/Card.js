import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

class Card extends Component {

    render() {

        return(
            <View style={styles.container} />
        );
    }
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 1,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowOffset: {width: 0, height: 2},
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 1,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10
  }
});

export default Card;