import React from 'react';
import { Link } from 'react-router-dom';
import { HeaderWrapper, Nav, NavItem, ToggleButton } from '../styles/HeaderStyles';


const Header = ({ toggleTheme }) => (
    <HeaderWrapper>
        <Nav>
            <NavItem to="/">Home</NavItem>
            <NavItem to="/profile">Profile</NavItem>
        </Nav>
        <ToggleButton onClick={toggleTheme}>Toggle Theme</ToggleButton>
    </HeaderWrapper>
);

export default Header;