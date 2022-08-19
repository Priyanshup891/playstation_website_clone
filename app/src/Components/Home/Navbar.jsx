import React from 'react';
import styled from 'styled-components';
import logo from '../../assets/images/logo.png';
import {GoSearch} from 'react-icons/go';
import {MdKeyboardArrowDown} from 'react-icons/md';

const Navbar = () => {
    
    const sonyImageUrl = "https://www.sony.net/template/2020/en/img/logo.svg";

  return (
    <NavbarContainer>
        <Brand>
        <img src={sonyImageUrl} alt="" />
        </Brand>
        <Content>
            <Navigations>
            <img src={logo} alt="playstation_logo" />
            <a href="#">Games<MdKeyboardArrowDown size={20} color={"#8d8d8d"}/></a>
            <a href="#">Hardware<MdKeyboardArrowDown size={20} color={"#8d8d8d"}/></a>
            <a href="#">Services<MdKeyboardArrowDown size={20} color={"#8d8d8d"}/></a>
            <a href="#">News<MdKeyboardArrowDown size={20} color={"#8d8d8d"}/></a>
            <a href="#">Shop<MdKeyboardArrowDown size={20} color={"#8d8d8d"}/></a>
            <a href="#">Support<MdKeyboardArrowDown size={20} color={"#8d8d8d"}/></a>
            </Navigations>
            <SearchSignIn>
                <SignIn href='#'>Sign In</SignIn>
                <a href="#"><GoSearch size={20}/></a>
            </SearchSignIn>
        </Content>
    </NavbarContainer>
  )
}

const NavbarContainer = styled.nav`
width: 100%;
`;

const Brand = styled.div`
height: 36px;
background-color: #000;
display: flex;
justify-content: flex-end;
align-items: center;


img{
    height: 13px;
    margin: 0 8px;
}
`;

const Content = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
width: 100%;
height: 64px;
padding: 0 1.25rem;
`;

const Navigations = styled.div`
display: flex;
align-items: center;
justify-content: flex-start;
gap: 1rem;

a{
    text-decoration: none;
    font-size: 0.8rem;
    font-weight: 500;
    color:#000;
    display: flex;
    align-items: center;
}

img{
    height: 40px;
}
`;

const SearchSignIn = styled.div`
display: flex;
align-items: center;
justify-content: flex-end;
gap: 1rem;
`;

const SignIn = styled.a`
text-decoration: none;
font-size: 1rem;
font-weight: 500;
background-color: #363636;
color: #fff;
padding: 0.1rem 0.8rem;
border-radius: 1rem;
`;

export default Navbar;