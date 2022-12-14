import React, { useState, useContext } from "react";
import styled from "styled-components";
import { DataContext } from "../../context/DataProvider";
import { useNavigate } from "react-router-dom";
import { authenticateSignUp, authenticateSignIn } from "../../services/api";

const signUpInitial = {
  username:"",
  email:"",
  password:""
};

const signInInitial = {
  username:"",
  password:""
}

const SignIn = () => {
  const [account, toggleAccount] = useState("signIn");
  const [signUp, setSignUp] = useState(signUpInitial);
  const [signIn, setSignIn] = useState(signInInitial);
  const [error, setError] = useState(false);
const navigate = useNavigate();

 const {setAccount} = useContext(DataContext);

  const logoURL =
    "https://my.account.sony.com/central/signin/5bc96784c2c2db0963a7797a8cc089014498053d/assets/images/logo_playstation.png";
  const sonyImageUrl = "https://www.sony.net/template/2020/en/img/logo.svg";

  const onhandleSignUpChange = (e) => {
    setSignUp({...signUp, [e.target.name]: e.target.value});
  }

  const onhandleSignInChange = (e) => {
    setSignIn({...signIn, [e.target.name]: e.target.value});
  }

  const onhandleSignUpSubmit = async (event) => {
    event.preventDefault();
    let response = await authenticateSignUp(signUp);
    if(!response) return;
    setAccount(signUp.username);
    navigate('/');
  }

  const onhandleSignInSubmit = async (event) => {
    event.preventDefault();
    let response = await authenticateSignIn(signIn);
    if(response.status === 200){
      setAccount(signIn.username);
      navigate('/');
    } else {
      setError(true);
    }
  }


  return (
    <SignInContainer>
      <div>
        <Brand>
          <img src={sonyImageUrl} alt="sony" />
        </Brand>
        <img style={{ width: "100%" }} src={logoURL} alt="playstation" />
        {account === "signIn" ? (
          <>
            <form onSubmit={(event) => onhandleSignInSubmit(event)}>
              <p>Sign in to PlayStation with one of your Sony accounts.</p>
              {error && <p style={{color:"red", fontWeight:"600"}}>Please enter valid username and password</p>}
              <input type="text" placeholder="Enter Username" name="username" onChange={(e) => onhandleSignInChange(e)} />
              <input type="password" placeholder="Enter Password" name="password" onChange={(e) => onhandleSignInChange(e)} />
              <button type="submit">Sign In</button>
            </form>
            <p>OR</p>
            <button onClick={() => toggleAccount("signUp")}>
              Create New Account
            </button>
          </>
        ) : (
          <>
            <form onSubmit={(event) => onhandleSignUpSubmit(event)}>
              <p>Sign up to PlayStation with one of your Sony accounts.</p>
              <input type="text" placeholder="Enter Username" name="username" onChange={(e) => onhandleSignUpChange(e)} />
              <input type="email" placeholder="Enter Email" name="email" onChange={(e) => onhandleSignUpChange(e)} />
              <input type="password" placeholder="Enter Password" name="password" onChange={(e) => onhandleSignUpChange(e)} />
              <button type="submit">Sign Up</button>
            </form>
            <p>OR</p>
            <button onClick={() => toggleAccount("signIn")}>Already have an Account!</button>
          </>
        )}
      </div>
    </SignInContainer>
  );
};

const SignInContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${"https://my.account.sony.com/central/signin/5bc96784c2c2db0963a7797a8cc089014498053d/assets/images/wallpaper.jpg"});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;

  & > div {
    background-color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-bottom: 2rem;

    button {
      font-size: 1rem;
      font-weight: 600;
      color: #003791;
      border: none;
      border-radius: 0.2rem;
      background: none;
      cursor: pointer;
      margin-top: 1rem;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    padding: 1rem 2rem;
    gap: 2rem;
    input {
      font-size: 1.2rem;
      padding: 0.5rem 1rem;
      height: 100%;
      width: 100%;
      border-radius: 0.2rem;
      border: 2px solid #bebdbd;
      background: none;
      &:focus {
        background: none;
        outline: none;
      }
    }

    button {
      padding: 0.7rem 2rem;
      font-size: 1rem;
      font-weight: 600;
      background-color: #003791;
      color: #fff;
      border: none;
      border-radius: 0.2rem;
      cursor: pointer;
    }
  }
`;

const Brand = styled.div`
  background-color: #000;
  width: 100%;
  height: 3.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 6rem;
  }
`;

export default SignIn;
