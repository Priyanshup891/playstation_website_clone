import React from 'react';
import styled from 'styled-components';
import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css';
import {useSelector} from 'react-redux';
import {GrFormAdd} from 'react-icons/gr';
import {MdArrowForwardIos} from 'react-icons/md';

const Cart = ({open, drawertoggle}) => {

  const {cartItems} = useSelector(state => state.cart);
  return (
    <Drawer
                open={open}
                onClose={drawertoggle}
                direction='right'
                className='bla bla bla'
                size={560}
                overlayColor="rgba(210,212,217,.9)"
                overlayOpacity={0.8}
            >
              {
                cartItems.length ? (
                  <CartContainer>
                    <h1>Confirm Purchase</h1>
                    <div style={{display:"flex", alignItems:"center", justifyContent:"space-between", width:"100%"}}>
                      <p>Subtotal</p>
                      <p>Rs 4900</p>
                    </div>
                    <div style={{display:"flex", alignItems:"center", justifyContent:"space-between", width:"100%"}}>
                      <h2>Subtotal</h2>
                      <h2>Rs 4900</h2>
                    </div>
                    <span>Redeem Code</span>
                    <input type="text" placeholder='Enter discount code' />
                    <span>Payment Method</span>
                    <button style={{display:"flex", alignItems:"center", justifyContent:"space-between", width:"100%"}}>
                      <div style={{display:"flex", alignItems:"center"}}>
                        <GrFormAdd/>
                        <h3>Add Payment Method</h3>
                      </div>
                      <MdArrowForwardIos/>
                    </button>

                    <span>Summery</span>
                  {
                    cartItems.map((item) => (
                      <div>
                        <div>
                          <img src={item.poster_path} alt="poster" />
                        </div>
                        <div>
                          <h3>{item.title}</h3>
                          <h4>Rs {item.price}</h4>
                          <p>Release Date: {item.release_date}</p>
                        </div>
                      </div>
                    ))
                  }
                    </CartContainer>
                ) : (
                  <p>Empty</p>
                )
              }
            </Drawer>
  )
}

const CartContainer = styled.div`
padding: 2rem 1rem;
display: flex;
flex-direction: column;
align-items: flex-start;
h1{
  font-size: 24px;
  font-weight: 400;
}
`;



export default Cart;