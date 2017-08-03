import React, { Component } from 'react';
import { StyleSheet, ScrollView, View, Image, Text } from 'react-native';
import Card from './Card';

class MovieDetailScreen extends Component {

    static navigationOptions = ({navigation}) => ({
        title: 'Detail',
    });

    constructor(props){
        super(props);
    }

    render() {
        return(
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.tile1}>
                        <View style={styles.tile1Child1}>
                            <Text>{this.props.navigation.state.params.movie.title}</Text>
                            <Text>Release: {this.props.navigation.state.params.movie.release_date}</Text>
                            <Text>Votes: {this.props.navigation.state.params.movie.vote_average}</Text>
                            <Text>Popularity: {this.props.navigation.state.params.movie.popularity}</Text>
                        </View>
                        <View style={styles.tile1Child2}>
                            <Image style={styles.imageStyle} source={{uri: 'https://image.tmdb.org/t/p/w600' + this.props.navigation.state.params.movie.poster_path}} />                     
                        </View>
                    </View>
                    <View style={styles.tile2}>
                        <Text>{this.props.navigation.state.params.movie.overview}</Text>
                    </View>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column'
  },
  tile1: {
    flex: 1, 
    flexDirection: 'row',
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
  },
  tile1Child1: {
    justifyContent: 'center'
  },
  tile1Child2: {
    flex: 1,
  },
  tile2: {
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
  },
  imageStyle: {
    height: 200,
    width: 130,
    alignSelf:'flex-end',
  }
});

export default MovieDetailScreen;