import React, { Component } from 'react';
import { View, FlatList, Text } from 'react-native';
import MovieListItem from './MovieListItem';

class MovieList extends Component {

    render() {
        return(
            <View>
                <FlatList
                    data={[ {key: '1', title: 'Devin'}, {key: '2', title: 'Jackson'}, {key: '3', title: 'James'}]}
                    renderItem={({item}) => <MovieListItem movie={item} />}
                />
            </View>
        );
    }
}

export default MovieList;