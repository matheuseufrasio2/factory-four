import styled from 'styled-components';

type Props = {
  isSuccess: boolean;
}

export const Container = styled.div<Props>`
  background-color: var(--gray-500);
  padding: 1rem 1rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  border-radius: 8px;
  border: 2px solid ${({ isSuccess }) => (isSuccess ? '#228c22' : '#ca0b00')};

  h1 {
    text-transform: uppercase;
  }

  .information {
    margin-top: 0.5rem;
  }
`;
