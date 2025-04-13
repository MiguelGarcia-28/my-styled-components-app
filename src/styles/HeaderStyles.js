import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderWrapper = styled.header`
    background: ${({ theme }) => theme.primary};
    padding: 1rem 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Nav = styled.nav`
    display: flex;
    gap: 20px;
`;

export const NavItem = styled(Link)`
    font-size: 1.2rem;
    color: white;
    
    &:hover {
        opacity: 0.8;
    }
`;

export const ToggleButton = styled.button`
    background: transparent;
    border: 1px solid white;
    color: white;
    padding: 0.5rem 1rem;
    cursor: pointer;
    
    &:hover {
        background: white;
        color: ${({ theme }) => theme.primary};
    }
`;