import React, { useState, useContext } from "react";
import styled from "styled-components";
import { DataContext } from "../../context/DataProvider";
import { useNavigate } from "react-router-dom";
import { authenticateSignUp } from "../../services/api";

const signUpInitial = {
  username:"",
  email:"",
  password:""
}

const SignIn = () => {
  const [account, toggleAccount] = useState("signIn");
  const [signUp, setSignUp] = useState(signUpInitial);
const navigate = useNavigate();

 const {setAccount} = useContext(DataContext);

  const logoURL =
    "https://my.account.sony.com/central/signin/9546b31c331059ebad4e10d876afa72f90c0cbf0/assets/images/logo_playstation.png";
  const sonyImageUrl = "https://www.sony.net/template/2020/en/img/logo.svg";

  const handleChange = (e) => {
    setSignUp({...signUp, [e.target.name]: e.target.value});
    console.log(signUp);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    let response = await authenticateSignUp(signUp);
    if(!response) return;
    setAccount(signUp.username);
    navigate('/');
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
            <form action="">
              <p>Sign in to PlayStation with one of your Sony accounts.</p>
              <input type="text" placeholder="Enter Username" name="username" />
              <input type="password" placeholder="Enter Password" name="password" />
              <button>Sign In</button>
            </form>
            <p>OR</p>
            <button onClick={() => toggleAccount("signUp")}>
              Create New Account
            </button>
          </>
        ) : (
          <>
            <form onSubmit={(event) => handleSubmit(event)}>
              <p>Sign up to PlayStation with one of your Sony accounts.</p>
              <input type="text" placeholder="Enter Username" name="username" onChange={(e) => handleChange(e)} />
              <input type="email" placeholder="Enter Email" name="email" onChange={(e) => handleChange(e)} />
              <input type="password" placeholder="Enter Password" name="password" onChange={(e) => handleChange(e)} />
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
  background-image: url(https://my.account.sony.com/central/signin/9546b31c331059ebad4e10d876afa72f90c0cbf0/assets/images/wallpaper.jpg);
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
