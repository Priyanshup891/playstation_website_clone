import React from 'react';
import styled from 'styled-components';

const NewReleaseGame = ({gamesData}) => {
  return (
    <Container>
        <Content>
            <h2>New release</h2>
            <p>Great PS5 and PS4 games available now</p>
            <Grid>
                {
                    gamesData.map((data) => (
                        <div style={{display:"flex", flexDirection:"column", margin:"1.5rem 1rem"}}>
                        <img src={data.poster_path} alt="game" />
                        <span>{data.title}</span>
                        </div>
                    ))
                }
            </Grid>
            <div style={{display:"flex", alignItems:"center", justifyContent:"center", marginTop:"1rem"}}>
            <button>Load More</button>
            </div>
        </Content>
    </Container>

  )
}

const Container = styled.div`
width: 100%;
margin-top: 250px;
height: 100%;
background-color: #000;
padding: 2rem 0;

`;

const Content = styled.div`
margin: 0 6rem;


h2{
    color:#fff;
    font-size: 1.2rem;
    font-weight: 500;
}

p{
    color: #fff;
    font-size: 1.25rem;
    font-weight: 200;
    margin-top: 0.5rem;
}

button{
    padding: 0.7rem 2rem ;
    font-size: 1rem;
    font-weight: 600;
    background-color: #cc0000;
    color: #fff;
    border: none;
    outline: none;
    border-radius: 2rem;
    
}
`;

const Grid = styled.div`
display: grid;
grid-template-columns: repeat(6,1fr);
align-items: flex-start;
justify-items: center;
margin-top: 1rem;

img{
    width: 100%;
    display: block;
    object-fit: cover;
    border-radius: 0.7rem;
    transition: 0.2s ease-in-out;

    &:hover{
        transform: scale(1.02);
    }
}
span{
    color: #cccccc;
    font-size: 1rem;
    margin-top: 1rem;
    font-weight: 400;
}


`;

export default NewReleaseGame;