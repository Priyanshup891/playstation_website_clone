import React, {useContext} from 'react';
import styled from 'styled-components';
import logo from '../../assets/images/logo.png';
import { DataContext } from '../../context/DataProvider';
import {GoSearch} from 'react-icons/go';
import {MdKeyboardArrowDown} from 'react-icons/md';
import {Link} from 'react-router-dom';
import {BsPersonSquare, BsCart4} from 'react-icons/bs';
import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css';
import Cart from '../Cart/Cart';
import { useSelector } from 'react-redux';




const Navbar = () => {

    const {cartItems} = useSelector(state => state.cart);
    
    const sonyImageUrl = "https://www.sony.net/template/2020/en/img/logo.svg";
    const {account} = useContext(DataContext);

    const [isOpen, setIsOpen] = React.useState(false)
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState);
        if (isOpen === false) {
            document.body.style.overflow = "hidden";
          } else {
            document.body.style.overflow = "auto";
          }
    }



  return (
    <NavbarContainer>
        <Brand>
        <img src={sonyImageUrl} alt="" />
        </Brand>
        <Content>
            <Navigations>
            <Link to="/"><img src={logo} alt="playstation_logo" /></Link>
            <NavigationLinks href="#">Games<MdKeyboardArrowDown size={20} color={"#8d8d8d"}/></NavigationLinks>
            <NavigationLinks href="#">Hardware<MdKeyboardArrowDown size={20} color={"#8d8d8d"}/></NavigationLinks>
            <NavigationLinks href="#">Services<MdKeyboardArrowDown size={20} color={"#8d8d8d"}/></NavigationLinks>
            <NavigationLinks href="#">News<MdKeyboardArrowDown size={20} color={"#8d8d8d"}/></NavigationLinks>
            <NavigationLinks href="#">Shop<MdKeyboardArrowDown size={20} color={"#8d8d8d"}/></NavigationLinks>
            <NavigationLinks href="#">Support<MdKeyboardArrowDown size={20} color={"#8d8d8d"}/></NavigationLinks>
            </Navigations>
            <SearchSignIn>
                {
                    account ? <h2 style={{color:"#000",fontSize:"1.2rem", display:"flex", alignItems:"center", gap:"0.5rem"}}><BsPersonSquare size={20}/> {account}</h2> :
                <Link style={{textDecoration:"none"}} to="/signIn">
                <SignIn>Sign In</SignIn>
                </Link>
                }
                <button style={{background:"none", border:"none", cursor:"pointer"}} onClick={toggleDrawer}><BsCart4 color='#000' size={25}/></button>
                <div>
                <Cart open={isOpen} drawertoggle={toggleDrawer}/>
                {
                    cartItems.length ? (
                        <CartCount>{cartItems.length}</CartCount>
                    ) : ""
                }
                </div>
                
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

const CartCount = styled.div`
position: absolute;
width: 18px;
height: 18px;
display: flex;
align-items: center;
justify-content: center;
border-radius: 50%;
color: #fff;
top: 0;
right: 0;
margin-top: 50px;
margin-right: 33px;
background-color: blue;
font-size: 12px;
`;

const NavigationLinks = styled.a`
text-decoration: none;
    font-size: 0.8rem;
    font-weight: 500;
    color:#000;
    display: flex;
    align-items: center;

    @media (max-width: 688px) {
        display: none;
  }
`;

export default Navbar;