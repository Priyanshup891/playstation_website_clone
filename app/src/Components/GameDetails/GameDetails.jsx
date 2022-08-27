import React, { useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getGameDetail } from "../../redux/actions/gamesAction";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 5,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const GameDetails = () => {
  const { id } = useParams();

  const dispatch = useDispatch();
  const { loading, game } = useSelector((state) => state.getGameDetail);

  useEffect(() => {
    if (game && id !== game._id) {
      dispatch(getGameDetail(id));
    }
  }, [dispatch, id, loading, game]);

  const arrayType = (list) => {
    const List = [list];

    return (
      <div>
        {List.map((li) => (
          <div>
            <p>{li}</p>
          </div>
        ))}
      </div>
    );
  };

  const imageList = (game) => {
    const result = [];
    for (const prop in game["images"]) {
      const value = game["images"];
      result.push(value[prop]);
    }
    return (
      <div style={{ background: "#000", padding: "3rem 7rem" }}>
        <Carousel
          swipeable={false}
          draggable={false}
          responsive={responsive}
          infinite={true}
          keyBoardControl={true}
          removeArrowOnDeviceType={["tablet", "mobile"]}
          containerClass="carousel-container"
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          {result.map((image) => (
            <div style={{ marginRight: "1rem" }}>
              <img
                style={{ width: "100%", borderRadius: "0.7rem" }}
                src={image}
                alt=""
              />
            </div>
          ))}
        </Carousel>
      </div>
    );
  };

  return (
    <DetailContanier>
      <div>
        {game && (
          <>
            <div>
              <BgImage src={game.background_path} alt="" />
              <Info>
                <h1>{game.title}</h1>
                <h3>Rs 4,399</h3>
                {arrayType(game.console_type)}
                <div>
                  <button>Add to Cart</button>
                </div>
                <p>Released 10/02/2022</p>
                <Trailer
                  src={game.trailer_path}
                ></Trailer>
              </Info>
            </div>
            {imageList(game)}
          </>
        )}
      </div>
    </DetailContanier>
  );
};

const DetailContanier = styled.div`
  width: 100%;
  height: 80vh;
`;

const BgImage = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  right: 0;
  top: 100px;
  z-index: -1;
`;

const Info = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1.5rem;
  padding-top: 5rem;
  padding-left: 7rem;
  padding-bottom: 1rem;
  background: linear-gradient(90deg, #000000, 70%, rgba(0, 0, 0, 0));
  h1 {
    color: #fff;
    font-size: 3rem;
    font-weight: 200;
  }

  span {
    color: #fff;
    font-size: 1rem;
    font-weight: 500;
  }

  h3 {
    color: #fff;
    font-size: 1.8rem;
    font-weight: 200;
  }

  button {
    width: 300px;
    padding: 0.7rem 0;
    font-size: 1rem;
    font-weight: 600;
    background-color: #d63d00;
    border: none;
    color: #fff;
    border-radius: 3rem;
  }

  p {
    color: #fff;
    font-size: 1rem;
  }
`;

const Trailer = styled.iframe`
/* width="420"
                  height="315" */
width: 420px;
height: 315px;
border: none;
border-radius: 0.7rem;
`;

export default GameDetails;
