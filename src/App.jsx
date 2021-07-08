import React, { useCallback, useState } from 'react';
import { Octokit } from '@octokit/core';
import { Gist } from './components';
import {
  Button, Input, Container, StatusError,
} from './styles';

const App = () => {
  const [userName, setUserName] = useState('');
  const [data, setData] = useState(false);
  const [error, setError] = useState('');

  const fetchData = useCallback(async () => {
    const octokit = new Octokit();
    try {
      const resp = await octokit.request(`/users/${userName}/gists`);

      setData(resp && resp.data);
      setError(resp && resp.status !== 200 ? resp.status : '');
    } catch (err) {
      setError(err && err.message);
    }
  }, [userName]);

  const handleChange = ({ target }) => {
    setUserName(target.value);
  };

  const handleClick = () => {
    if (userName) {
      fetchData();
    }
  };

  const hasData = data && data?.length !== 0;
  const emptyData = data && data?.length === 0;

  return (
    <main>
      <Container>
        <form onSubmit={(e) => e.preventDefault()}>
          <div>
            <h3>Type a git username:</h3>
            <Input
              onChange={handleChange}
              type="search"
              id="search"
              name="search"
              aria-label="Search for Gists of a Git username"
            />
            <Button type="button" onClick={handleClick}>Search</Button>
          </div>
          <div>
            {hasData && data.map((gist) => <Gist data={gist} key={data.id} />)}
            {emptyData && userName && <h4>No results.</h4>}
            {data === false && userName && <h4>When ready, please click on search.</h4>}
            {error ? <StatusError>{error}</StatusError> : ''}
          </div>
        </form>
      </Container>
    </main>
  );
};

export default App;
