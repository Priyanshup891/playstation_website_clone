import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const NewReleaseGame = ({ gamesData }) => {
  return (
    <GamesContainer>
      <h2>New release</h2>
      <p>Great PS5 and PS4 games available now</p>
      <GameGrid>
        {gamesData.map((games) => (
             <Link style={{textDecoration:"none"}} to={`/detail/${games._id}`}>
          <GameCard>
            <CardHead>
              <img src={games.poster_path} alt={games.title} />
            </CardHead>
            <CardBody>
              <span>{games.title}</span>
            </CardBody>
          </GameCard>
             </Link>
        ))}
      </GameGrid>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "1rem",
        }}
      >
        <button>Load More</button>
      </div>
    </GamesContainer>
  );
};

const GamesContainer = styled.div`
  background-color: #000;
  padding: 1rem 8rem;

  h2 {
    color: #fff;
    font-size: 1.2rem;
    font-weight: 500;
  }

  p {
    color: #fff;
    font-size: 1.25rem;
    font-weight: 200;
    margin-top: 0.5rem;
  }

  button {
    padding: 0.7rem 2rem;
    font-size: 1rem;
    font-weight: 600;
    background-color: #cc0000;
    color: #fff;
    border: none;
    outline: none;
    border-radius: 2rem;
  }
`;

const GameGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 30px;
  margin-bottom: 30px;
  margin-top: 40px;
`;

const GameCard = styled.div`
  position: relative;
  border-radius: 15px;
  margin-bottom: 15px;

  &:hover{
    img{
        transform:scale(1.1) ;
    }
  }
`;

const CardHead = styled.div`
  position: relative;
  height: 250px;
  border-radius: 15px;
  margin-bottom: 15px;
  overflow: hidden;

  img {
    display: block;
    width: 100%;
    height: 100%;
    pointer-events: none;
    object-fit: cover;
  }
`;

const CardBody = styled.div`
  span {
    color: #cccccc;
    font-size: 1rem;
    margin-top: 1rem;
    font-weight: 400;
  }
`;

// const Container = styled.div`
// width: 100%;
// height: 100%;
// background-color: #000;
// padding: 2rem 0;

// `;

// const Content = styled.div`
// margin: 0 6rem;

// h2{
//     color:#fff;
//     font-size: 1.2rem;
//     font-weight: 500;
// }

// p{
//     color: #fff;
//     font-size: 1.25rem;
//     font-weight: 200;
//     margin-top: 0.5rem;
// }

// button{
//     padding: 0.7rem 2rem ;
//     font-size: 1rem;
//     font-weight: 600;
//     background-color: #cc0000;
//     color: #fff;
//     border: none;
//     outline: none;
//     border-radius: 2rem;

// }
// `;

// const Grid = styled.div`
// display: grid;
// grid-template-columns: repeat(6,1fr);
// align-items: flex-start;
// justify-items: center;
// margin-top: 1rem;

// img{
//     width: 100%;
//     display: block;
//     object-fit: cover;
//     border-radius: 0.7rem;
//     transition: 0.2s ease-in-out;

//     &:hover{
//         transform: scale(1.02);
//     }
// }
// span{
//     color: #cccccc;
//     font-size: 1rem;
//     margin-top: 1rem;
//     font-weight: 400;
// }

// `;

export default NewReleaseGame;

{
  /* <Content>
<h2>New release</h2>
<p>Great PS5 and PS4 games available now</p>
<Grid>
    {
        gamesData.map((data) => (
            <Link style={{textDecoration:"none"}} to={`/detail/${data._id}`}>
            <div style={{display:"flex", flexDirection:"column", margin:"1.5rem 1rem"}}>
            <img src={data.poster_path} alt="game" />
            <span>{data.title}</span>
            </div>
            </Link>
        ))
    }
</Grid>
<div style={{display:"flex", alignItems:"center", justifyContent:"center", marginTop:"1rem"}}>
<button>Load More</button>
</div>
</Content> */
}
