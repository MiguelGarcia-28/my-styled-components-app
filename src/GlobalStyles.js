import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    body {
        margin: 0;
        font-family: 'Arial', sans-serif;
        background-color: ${({ theme }) => theme.background};
        color: ${({ theme }) => theme.text};
        transition: all 0.3s ease;
    }
        
    a {
        text-decoration: none;
        color: ${({ theme }) => theme.primary};
    }
`;

export default GlobalStyles;