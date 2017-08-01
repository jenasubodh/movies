import React, { Component } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

class MovieListItem extends Component {

    render() {
        return(
            <View style={styles.container}>
                 <Image source={{uri: 'https://image.tmdb.org/t/p/w600' + this.props.movie.poster_path}}
                        style={styles.imageBackground} blurRadius={1}>
                        <Text style={styles.textTitle}>{this.props.movie.original_title}</Text>
                        <Text style={styles.textOverview}>{this.props.movie.overview}</Text>
                </Image>
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 1,
    shadowColor: "#000000",
    shadowOpacity: 0.3,
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
    height: 250,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  imageBackground: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover'
  },
  textTitle: {
    textAlign: 'left',
    color: 'white',
    backgroundColor: 'rgba(0,0,0,0)',
    fontSize: 20,
    paddingTop: 120,
    paddingLeft: 10,
    fontWeight: 'bold'
  },
  textOverview: {
    textAlign: 'left',
    color: 'white',
    backgroundColor: 'rgba(0,0,0,0)',
    fontSize: 15,
    paddingLeft: 10
  }

});

export default MovieListItem;