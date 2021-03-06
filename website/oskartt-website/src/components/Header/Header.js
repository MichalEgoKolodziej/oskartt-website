import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Logo from '../../images/TT.svg';
import Socials from '../Socials/Socials';

const StyledLogo = styled(Logo)`
    fill: ${({theme}) => theme.colors.grey};
    width: 50px;

    ${({theme}) => theme.media.tablet`
        width: 100px;
    `}
`;

const StyledNav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    position: absolute;
    top: 0;
    left: 0;

    z-index: 100;

    width: 100%;
    padding: 50px 30px;

    ${({theme}) => theme.media.tablet`
        padding: 40px 70px;
        height: 140px;
    `}
`;

const Header = () => {
    return (
        <StyledNav>
            <Link to='/'>
                <StyledLogo />
            </Link>
            <Socials />
        </StyledNav>
    )
}

export default Header;