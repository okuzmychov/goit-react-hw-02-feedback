import { styled } from 'styled-components';

export const StatElement = styled.p`
  display: flex;
  border-radius: 4px;
  padding: 4px;
  margin-top: 7px;
  font-size: 24px;
  width: 300px;
  background-color: ${p => p.theme.colors.lightgreen};
`;
