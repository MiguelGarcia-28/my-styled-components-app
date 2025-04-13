import React from 'react';
import { FooterWrapper } from '../styles/FooterStyles';

const Footer = () => (
    <FooterWrapper>
        © {new Date().getFullYear()} Miguel Garcia. CMCC. CPT 253. My React App. All Rights Reserved.
    </FooterWrapper>
);

export default Footer;