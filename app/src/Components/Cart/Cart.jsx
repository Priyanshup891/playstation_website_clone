import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css';
import {useSelector} from 'react-redux';
import {GrFormAdd} from 'react-icons/gr';
import {MdArrowForwardIos} from 'react-icons/md';
import {RiDeleteBin6Line} from 'react-icons/ri';

const Cart = ({open, drawertoggle}) => {

  const [total, setTotal] = useState(0);
  const {cartItems} = useSelector(state => state.cart);

  useEffect(() => {
    calculateTotal();
  })

  const calculateTotal = () => {
    let totalPrice = 0;
    for(let i = 0; i < cartItems.length; i++){
      totalPrice = totalPrice + Number(cartItems[i].price);
    }

    setTotal(totalPrice);
  }


  return (
    <Drawer
                open={open}
                onClose={drawertoggle}
                direction='right'
                className='bla bla bla'
                style={{overflow:"auto"}}
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
                      <p>Rs {total}</p>
                    </div>
                    <div style={{display:"flex", alignItems:"center", justifyContent:"space-between", width:"100%"}}>
                      <h2>Total ({cartItems.length} items)</h2>
                      <h2>Rs {total}</h2>
                    </div>
                    <span>Redeem Code</span>
                    <input type="text" placeholder='Enter discount code' />
                    <span>Payment Method</span>
                    <button style={{display:"flex", alignItems:"center", justifyContent:"space-between", width:"100%"}}>
                      <div style={{display:"flex", alignItems:"center"}}>
                        <GrFormAdd size={30} style={{marginRight:"0.2rem"}}/>
                        <h3>Add Payment Method</h3>
                      </div>
                      <MdArrowForwardIos size={20} color="#0373e9"/>
                    </button>

                    <span>Summery</span>
                  {
                    cartItems.map((item) => (
                      <div style={{display:"flex", flexDirection:"row", alignItems:"flex-start", background:"#ededed", padding:"1rem", gap:"1rem"}}>
                        <div style={{display:"flex", flex:"1"}}>
                          <img src={item.poster_path} alt="poster" />
                        </div>
                        <div style={{display:"flex", flex:"4", flexDirection:"column", alignItems:"flex-start", gap:"5px"}}>
                          <h3>{item.title}</h3>
                          <h4>Rs {item.price}</h4>
                          <p>Release Date: {item.release_date}</p>
                          <div style={{width:"100%", display:"flex", justifyContent:"end"}}>
                          <RiDeleteBin6Line size={20} color="red" cursor="pointer"/>
                          </div>
                        </div>
                      </div>
                    ))
                  }
                  <button style={{width:"100%", fontSize:"1rem", fontWeight:"600", borderRadius:"50px", background:"#0373e9", color:"#fff"}}>Order & Pay</button>
                    </CartContainer>
                ) : (
                  <p>Empty</p>
                )
              }
            </Drawer>
  )
}

const CartContainer = styled.div`
padding: 2rem 3rem;
display: flex;
flex-direction: column;
align-items: flex-start;
gap: 1rem;
h1{
  font-size: 24px;
  font-weight: 400;
}
h2{
  font-size: 18px;
}
h3{
  font-size: 1rem;
  font-weight: 600;
}
h4{
  font-size: 16px;
  color: #2f2f2f;
}
p{
  font-size: 16px;
}

span{
  font-size: 22px;
  font-weight: 600;
  margin-top: 2rem;
}

input{
  width: 100%;
  padding: 0.7rem;
  font-size: 1rem;
  background-color: #e4e4e4;
  border: none;
  border-radius: 20px;
}
button{
  padding: 1rem;
  box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.1);
  border: none;
  background: #fffdfd;
  &:hover{
    opacity: 0.8;
  }
}
img{
  width: 100%;
}
`;



export default Cart;