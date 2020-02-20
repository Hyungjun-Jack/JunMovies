import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import makePhotoUrl from '../utils/makePhotoUrl';
import Layout from '../constants/Layout';
import MoviePoster from './MoviePoster';
import {TINT_COLOR} from '../constants/Colors';
import MovieRating from './MovieRating';

const Container = styled.View`
  flex: 1;
  position: relative;
`;

const BgImage = styled.Image`
  width: ${Layout.width};
  height: ${Layout.height / 3};
  opacity: 0.3;
  position: absolute;
`;

const Content = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  padding-left: 20px;
  justify-content: space-around;
`;

const Column = styled.View`
  width: 60%;
  align-items: flex-start;
`;

const Title = styled.Text`
  color: ${TINT_COLOR};
  font-size: 14px;
  font-weight: 600;
`;

const VoteContainer = styled.View`
  margin: 5px 0px;
`;

const Overview = styled.Text`
  color: ${TINT_COLOR};
  font-size: 12px;
  margin-bottom: 10px;
`;

const BtnContainer = styled.TouchableOpacity`
  background-color: #e74c3c;
  border-radius: 5px;
  padding: 8px;
`;

const BtnText = styled.Text`
  color: ${TINT_COLOR};
  font-size: 12px;
`;

const MovieSlide = ({
  id,
  overview,
  voteAvg,
  title,
  backgroundPhoto,
  posterPhoto,
}) => (
  <Container id={id}>
    <BgImage source={{uri: makePhotoUrl(backgroundPhoto)}} />
    <Content>
      <MoviePoster path={posterPhoto} />
      <Column>
        <Title>{title}</Title>
        <VoteContainer>
          <MovieRating votes={voteAvg} inSlide={true} />
        </VoteContainer>
        {overview ? (
          <Overview>
            {overview.length > 127
              ? `${overview.substring(0, 127)}...`
              : overview}
          </Overview>
        ) : null}
        <BtnContainer>
          <BtnText>View details</BtnText>
        </BtnContainer>
      </Column>
    </Content>
  </Container>
);

MovieSlide.propTypes = {
  id: PropTypes.number.isRequired,
  posterPhoto: PropTypes.string.isRequired,
  backgroundPhoto: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  voteAvg: PropTypes.number.isRequired,
  overview: PropTypes.string.isRequired,
};

export default MovieSlide;
