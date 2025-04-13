import React from 'react';
import { ProfileContainer, Name, Email, Bio } from '../styles/ProfilePageStyles';

const ProfilePage = () => (
    <ProfileContainer>
        <Name>Miguel Garcia</Name>
        <Email>miguelgarciacruz@cmconnect.cmcc.edu</Email>
        <Bio>CMCC Student</Bio>
    </ProfileContainer>
);

export default ProfilePage;