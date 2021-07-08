import React from 'react';
import PropTypes from 'prop-types';
import Container from './styles';
import { OwnerType } from '../../types';

const User = ({ user }) => (
  <Container>
    <img alt="User avatar" width="75" src={user.owner.avatar_url} />
    <span><strong><a title="User's Git URL" href={user.owner?.url}>{user.owner?.login}</a></strong></span>
  </Container>
);

User.propTypes = {
  user: PropTypes.shape({
    ...OwnerType,
  }).isRequired,
};

export default User;
