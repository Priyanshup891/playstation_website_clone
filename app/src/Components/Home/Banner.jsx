import React from "react";
import styled from "styled-components";
import { bannerData } from "../../Constant/data";

import Carousel from "react-bootstrap/Carousel";



const Banner = () => {


  return (
    <BannerContainer>
      <Carousel fade interval={5000} >
        {
          bannerData.map((data) => (
        <Carousel.Item>
          <img src={data.banner_image} alt="banner_image" />
          <Carousel.Caption style={{display:"flex", flexDirection:"column", alignItems:"flex-start",background: "linear-gradient(90deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0))", width:"100%", top:0,left:0, height:"100%", paddingLeft:"200px", paddingTop:"100px"}}>
            <img style={{width:"350px"}} src={data.logo} alt="logo" />
            <h1>{data.title}</h1>
            <p>{data.overview}</p>
            <button>Pre-order now</button>
          </Carousel.Caption>
        </Carousel.Item>
          ))
        }
      </Carousel>
    </BannerContainer>
  );
};



const BannerContainer = styled.div`
width: 100%;
height: 50vh;

img{
  width: 100%;
}

h1 {
    color: #fff;
    font-weight: 100;
    font-size: 2.5rem;
  }
  p {
    color: #fff;
    font-size: 1rem;
    font-weight: 300;
    letter-spacing: 1px;
    width: 600px;
    text-align: left;
  }

  button {
    padding: 0.7rem 2rem;
    border-radius: 2rem;
    font-size: 1rem;
    font-weight: 600;
    background-color: #0071f3;
    color: #fff;
    border: none;
    margin-top: 1rem;
    &:hover {
      opacity: 0.8;
    }
`;

export default Banner;
