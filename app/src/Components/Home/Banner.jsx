import React from "react";
import styled from "styled-components";
import { bannerData } from "../../Constant/data";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Banner = () => {

  const CustomDot = ({ onClick, ...rest }) => {
    const {
      index,
      active,
    } = rest;

    return (
      <div style={{padding:"0 1rem", display:"flex", alignItems:"center", justifyContent:"center"}}>
      <button
      className={active ? "active" : "inactive"}
      onClick={() => onClick()}
      >
        <img style={{borderRadius:"0.7rem", width:"100%"}} src={bannerData[index].image} alt="" />
      </button>
      </div>
    );
  };

  return (
    <BannerContainer>
      <Carousel
        swipeable={false}
        draggable={false}
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={4000}
        keyBoardControl={true}
        showDots
        customDot={<CustomDot />}
        renderDotsOutside={true}
        removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
        containerClass="carousel-container"
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {bannerData.map((data) => (
          <div>
            <img src={data.banner_image} alt="banner_image" />
            <BannerInfo>
              <div>
                <img src={data.logo} alt="banner_logo" />
                <h1>{data.title}</h1>
                <p>{data.overview}</p>
                <button>Pre-order now</button>
              </div>
            </BannerInfo>
          </div>
        ))}
      </Carousel>
    </BannerContainer>
  );
};

const BannerContainer = styled.div`
  width: 100%;
  img {
    width: 100%;
    display: block;
    object-fit: cover;
  }
`;

const BannerInfo = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: linear-gradient(90deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0));
  padding-left: 6rem;

  & > div {
    width: 500px;
    margin-top: 120px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }

  img {
    width: 400px;
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
  }

  button{
    padding: 0.7rem 2rem;
    border-radius: 2rem;
    font-size: 1rem;
    font-weight: 600;
    background-color: #0071f3;
    color: #fff;
    border: none;
    margin-top: 1rem;
    &:hover{
      opacity: 0.8;
    }
  }
`;

export default Banner;
