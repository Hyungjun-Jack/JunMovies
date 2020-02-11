import React from 'react';
import {Text} from 'react-native';
import PropTypes from 'prop-types';

const MoviesPresenter = () => <Text>Movies</Text>;

MoviesPresenter.propType = {
  loading: PropTypes.bool.isRequired,
};

export default MoviesPresenter;
