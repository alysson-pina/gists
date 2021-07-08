import React, { useEffect, useState } from 'react';
import { request } from '@octokit/request';
import PropTypes from 'prop-types';
import { Container, StatusError } from './styles';
import { UsersList } from '..';

const Forks = React.memo(({ gistId }) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await request(`GET /gists/${gistId}/forks`, {
          gist_id: gistId,
        });

        setData(resp && resp.data);
      } catch (err) {
        setError(err && err.message);
      }
    };

    fetchData();
  }, [gistId]);

  const hasForks = data?.length > 0;

  return (
    <Container>
      {!hasForks && <span>No forks yet.</span>}
      {hasForks && <UsersList users={data.slice(0, 3)} />}
      {error ? <StatusError>{error}</StatusError> : ''}
    </Container>
  );
});

Forks.propTypes = {
  gistId: PropTypes.string.isRequired,
};

export default Forks;
