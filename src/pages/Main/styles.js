import styled from 'styled-components/native';
import { colors } from '~/styles';

const Container = styled.View`
  flex: 1;
  background: ${colors.background};
  justify-content: center;
  align-items: center;
`;

const Text = styled.Text`
  font-size: 20px;
  font-weight: 500;
  color: palevioletred;
`;

export { Container, Text };
