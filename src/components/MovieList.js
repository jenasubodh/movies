import React, { Component } from 'react';
import { StyleSheet, View, FlatList, Text } from 'react-native';
import MovieListItem from './MovieListItem';

class MovieList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isLoading: false,
            data: [],
            page: 1,
            seed: 1,
            error: null,
            refreshing: false,
        };
    }

    componentDidMount() {
        this.getTrendingMovies();
    }

    render() {
        return (
                <FlatList
                    data={this.state.data}
                    keyExtractor={item => item.id}
                    renderItem={({item}) => <MovieListItem movie={item}/>} /> 
        );
    }

    getTrendingMovies() {
        const { page, seed } = this.state;
        const url = 'https://api.themoviedb.org/3/movie/popular?api_key=efac2c6e970e0e10691d0568f688344d&language=en-US&page='+page;

        this.setState({ loading: true });
            fetch(url)
                .then(res => res.json())
                .then(res => {
                    this.setState({
                        data: page === 1 ? res.results : [...this.state.data, ...res.results],
                        error: res.error || null,
                        loading: false,
                        refreshing: false
                    });
                })
                .catch(error => {
                    this.setState({ error, loading: false });
                });
    }
}

export default MovieList;