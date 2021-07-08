import styled from 'styled-components';

const StatusError = styled.h3`
  color: red;
`;

const Container = styled.section`
  padding: 20px;
`;

const Button = styled.button`
  margin-left: 5px;
  height: 25px;
  background: white;
  font-size: 16px;
  border-radius: 5px;
`;

const Input = styled.input`
  width: 250px;
  height: 20px;
  color: grey;
  font-size: 16px;
  border-radius: 5px;
  padding: 0 4px;
`;

export {
  Button,
  Container,
  Input,
  StatusError,
};
