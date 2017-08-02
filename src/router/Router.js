import { StackNavigator } from 'react-navigation';

import TrendingScreen from '../components/TrendingScreen';
import MovieDetailScreen from '../components/MovieDetailScreen';

const Router = StackNavigator({
  Trending: { 
    screen: TrendingScreen 
  },
  Detail: { 
    screen: MovieDetailScreen 
  },
});

export default Router;