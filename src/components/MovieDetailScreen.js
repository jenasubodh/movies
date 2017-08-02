import React, { Component } from 'react';
import { StyleSheet, ScrollView, View, Image, Text } from 'react-native';
import Card from './Card';

class MovieDetailScreen extends Component {

    static navigationOptions = ({navigation}) => ({
        title: navigation.state.params.movie.title,
    });

    constructor(props){
        super(props);
    }

    render() {
        return(
            <View style={styles.container}>     
                <View style={styles.tile1}>
                    <Image style={{height: 300, width: 200}} source={{uri: 'https://image.tmdb.org/t/p/w600' + this.props.navigation.state.params.movie.poster_path}} />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  tile1: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
    paddingBottom: 10,
  },
});

export default MovieDetailScreen;