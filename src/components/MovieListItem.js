import React, { Component } from 'react';
import { StyleSheet, TouchableHighlight, View, Text, Image } from 'react-native';

class MovieListItem extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
          <View style={styles.container}>
            <TouchableHighlight onPress={() => this.props.movieSelected(this.props.movie.id)}>
              <Image style={styles.movieImage} source={{uri: 'https://image.tmdb.org/t/p/w600' + this.props.movie.poster_path}}>
                <View style={styles.movieDetailContainer}>
                    <Text style={styles.movieName}>{this.props.movie.original_title}</Text>
                    <Text style={styles.movieOverview}>{this.props.movie.overview}</Text>
                </View>
              </Image>
            </TouchableHighlight>
        </View>
        );
    }
}

const styles = StyleSheet.create({ 

container: {
  flex: 1,
  paddingTop: 10,
  paddingLeft: 10,
  paddingRight: 10,
  shadowColor: "#000",
  shadowOpacity: 0.1,
  shadowRadius: 1,
  elevation: 5,
},
// View tag styling
movieDetailContainer: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, .5)', 
},
// Image tag styling
movieImage: {
    width: null,
    height: 250,
    resizeMode: 'cover'
},
movieName: {
    color: '#fff',
    opacity: .9,
    fontSize: 20,
    textAlign: 'center',
    fontWeight: '500',
    marginVertical: 15,
    backgroundColor: 'transparent'
},
movieOverview: {
    color: '#fff',
    opacity: .9,
    textAlign: 'center',
    backgroundColor: 'transparent'
}
})

export default MovieListItem;