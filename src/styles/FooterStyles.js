import styled from 'styled-components';

export const FooterWrapper = styled.footer`
    padding: 1rem;
    text-align: center;
    background-color: ${({ theme }) => theme.primary};
    color: white;
    position: relative;
    bottom: 0;
    width: 100%;
`;