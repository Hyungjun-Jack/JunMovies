import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Swiper from 'react-native-swiper';
import Layout from '../constants/Layout';
import MovieSlide from './MovieSlide';
import {BG_COLOR} from '../constants/Colors';

const SWIPER_HEIGHT = Layout.height / 3;

const View = styled.View`
  background-color: ${BG_COLOR};
  height: ${SWIPER_HEIGHT};
`;

const MovieSlider = ({movies}) =>
  movies ? (
    <Swiper
      showsPagination={false}
      showsButtons={false}
      autoplay={true}
      autoplayTimeout={3}
      style={{height: SWIPER_HEIGHT}}>
      {movies
        .filter(movie => movie.backdrop_path !== null)
        .map(movie => (
          <View key={movie.id}>
            <MovieSlide
              key={movie.id}
              overview={movie.overview}
              voteAvg={movie.vote_average}
              title={movie.title}
              id={movie.id}
              backgroundPhoto={movie.backdrop_path}
              posterPhoto={movie.poster_path}
            />
          </View>
        ))}
    </Swiper>
  ) : null;

MovieSlider.propTypes = {
  movies: PropTypes.array,
};

export default MovieSlider;
