import React, { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getGameDetail } from "../../redux/actions/gamesAction";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { GiGamepadCross } from "react-icons/gi";
import { MdVideogameAsset } from "react-icons/md";
import { TbDeviceGamepad2, TbNetwork } from "react-icons/tb";
import { MdOutlineBookOnline } from "react-icons/md";
import { BsPeopleFill } from "react-icons/bs";
import { RiRemoteControlLine } from "react-icons/ri";
import { addToCart } from "../../redux/actions/gamesAction";
import Cart from "../Cart/Cart";
import { DataContext } from "../../context/DataProvider";

const responsive = {

  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 3,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
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

  const {account} = useContext(DataContext);
  const navigate = useNavigate();

  const { id } = useParams();

  const dispatch = useDispatch();
  const { loading, game } = useSelector((state) => state.getGameDetail);
  const [quantity, setQuantity] = useState(1);
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
    if (isOpen === false) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };

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
      <div
        style={{
          background: "#1b1b1b",
          padding: "3rem 7rem",
          width: "100%",
          height: "100%",
        }}
      >
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
                style={{
                  width: "400px",
                  height: "240px",
                  borderRadius: "0.7rem",
                }}
                src={image}
                alt=""
              />
            </div>
          ))}
        </Carousel>
      </div>
    );
  };

  const addGameToCart = () => {
    if(account){
      toggleDrawer();
      setQuantity(1);
      dispatch(addToCart(id, quantity));
    } else {
      navigate("/signIn")
    }
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
                <span>2K</span>
                <span>PS5&nbsp;&nbsp;&nbsp;PS4</span>
                <h3>Rs {game.price}</h3>
                {arrayType(game.console_type)}
                <div>
                  <button onClick={() => addGameToCart()}>Add to Cart</button>
                </div>
                <p>Release date: {game.release_date}</p>
                <GamePlayDetail>
                  <div>
                    <p>
                      <GiGamepadCross size={25} /> PS Plus required for online
                      play
                    </p>
                    <p>
                      <MdVideogameAsset size={25} /> In-game purchases optional
                    </p>
                    <p>
                      <TbDeviceGamepad2 color="#fff" size={25} /> Vibration
                      function required
                    </p>
                    <p>
                      <TbNetwork size={25} /> Supports up to 8 online players
                      with PS Plus
                    </p>
                  </div>
                  <div>
                    <p>
                      <MdOutlineBookOnline size={25} /> Online play optional
                    </p>
                    <p>
                      <BsPeopleFill size={25} /> 1 - 8 players
                    </p>
                    <p>
                      <RiRemoteControlLine size={25} /> Remote Play supported
                    </p>
                  </div>
                </GamePlayDetail>
              </Info>
            </div>
            {imageList(game)}
            <div
              style={{
                background: "#1b1b1b",
                width: "100%",
                height: "100vh",
                padding: "3rem 7rem",
              }}
            >
              <Trailer src={game.trailer_path}></Trailer>
            </div>
          </>
        )}
      </div>
      <Cart open={isOpen} drawertoggle={toggleDrawer} />
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
  background: linear-gradient(rgba(27, 27, 27, 0), 70%, #1b1b1b),
    linear-gradient(90deg, #1b1b1b, 50%, rgba(0, 0, 0, 0));
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
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 0.7rem;
`;

const GamePlayDetail = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;

  p {
    font-size: 1rem;
    margin-bottom: 1rem;
    font-weight: 200;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`;

export default GameDetails;
