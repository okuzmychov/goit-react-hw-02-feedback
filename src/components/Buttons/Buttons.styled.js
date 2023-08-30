import styled from 'styled-components';

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 5px;
  margin: 10px 0;
`;

export const Button = styled.button`
  font-size: 20px;
  width: 95px;
  padding: 6px 8px;
  border-style: none;
  border-radius: 4px;
  cursor: pointer;
  color: ${p => p.theme.colors.green};
  :hover {
    box-shadow: 0 6px 8px 0 rgba(0, 0, 0, 0.24),
      0 10px 25px 0 rgba(0, 0, 0, 0.19);
  }
`;
