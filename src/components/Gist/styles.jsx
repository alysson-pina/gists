import styled from 'styled-components';

const WrapperDiv = styled.div`
  padding: 8px 0;
  border-bottom: 1px solid grey; 
`;

const Title = styled.h3`
  color: grey;
`;

const Container = styled.div`
  margin-top: 12px;
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export {
  Container,
  Tags,
  Title,
  WrapperDiv,
};
