import React from 'react';
import PropTypes from 'prop-types';
import {
  Container, Tags, Title, WrapperDiv,
} from './styles';
import { Forks, Tag } from '..';

const Gist = ({ data }) => (
  <WrapperDiv>
    <Title>{data.description}</Title>
    <div>
      <a href={data.url}>Gist URL</a>
    </div>
    <span>
      <strong>Created At:</strong>
      {' '}
      {data.created_at}
    </span>
    <Container>
      <div>Filetypes:</div>
      <Tags>
        {Object.keys(data.files).map(
          (k) => <Tag data={data.files[k].type} />,
        )}
      </Tags>
    </Container>
    <Container>
      <span><strong>Most recent Forks: </strong></span>
      <Forks gistId={data.id} />
    </Container>
  </WrapperDiv>
);

Gist.propTypes = {
  data: PropTypes.shape({
    created_at: PropTypes.string,
    description: PropTypes.string,
    id: PropTypes.string,
    files: PropTypes.objectOf(PropTypes.string),
    url: PropTypes.string,
  }).isRequired,
};

export default Gist;
