import React from 'react';
import Navbar from './Home/Navbar';
import Banner from './Home/Banner';
import NewReleaseGame from './Home/NewReleaseGame';

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Banner/>
        {/* <NewReleaseGame/> */}
    </div>
  )
}

export default Home