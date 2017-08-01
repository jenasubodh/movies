import React, { Component } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

class MovieListItem extends Component {

    render() {
        return(
            <View style={styles.container}>
                 <Image source={{uri: 'https://image.tmdb.org/t/p/w600' + this.props.movie.poster_path}}
                        style={styles.imageBackground}>
                        <Text style={styles.text}>{this.props.movie.title}</Text>
                </Image>
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    height: 250,
    padding: 30
  },
  imageBackground: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover'
  },
  text: {
    textAlign: 'center',
    color: 'white',
    backgroundColor: 'rgba(0,0,0,0)',
    fontSize: 32
  }

});

export default MovieListItem;