import styled from 'styled-components';

export const Container = styled.main`
    padding: 2rem;
    text-align: center;
`;

export const Title = styled.h1`
    font-size: 2.5rem;
`;

export const Description = styled.p`
    font-size: 1.2rem;
    padding-top: 1rem;
    color: ${({ theme }) => theme.text}
`;