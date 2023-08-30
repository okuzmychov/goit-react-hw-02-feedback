import styled from 'styled-components';

export const NoInfo = styled.h2`
  display: flex;
  width: 300px;
  height: 100px;
  margin-top: 10px;
  border-radius: 4px;
  background-color: ${p => p.theme.colors.lightgreen};
  justify-content: center;
  align-items: center;
`;
