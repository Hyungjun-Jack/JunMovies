import React from 'react';
import PropTypes from 'prop-types';
import Loader from '../../components/Loader';
import styled from 'styled-components';
import MovieSlider from '../../components/MovieSlider';
import {BG_COLOR} from '../../constants/Colors';

const Container = styled.ScrollView`
  background-color: ${BG_COLOR};
`;

const MoviesPresenter = ({loading, upcoming, popular, nowPlaying}) =>
  loading ? (
    <Loader />
  ) : (
    <Container>
      <MovieSlider movies={upcoming} />
    </Container>
  );

MoviesPresenter.propType = {
  loading: PropTypes.bool.isRequired,
  upcoming: PropTypes.array,
  popular: PropTypes.array,
  nowPlaying: PropTypes.array,
};

export default MoviesPresenter;
