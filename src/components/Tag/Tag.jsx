/* eslint-disable react/destructuring-assignment */
import React from 'react';
import PropTypes from 'prop-types';
import Container from './styles';

const Tag = ({ data }) => (
  <Container>
    {data}
  </Container>
);

Tag.propTypes = {
  data: PropTypes.string.isRequired,
};

export default Tag;
