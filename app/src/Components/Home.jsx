import React, {useEffect} from 'react';
import Navbar from './Home/Navbar';
import Banner from './Home/Banner';
import NewReleaseGame from './Home/NewReleaseGame';
import { getGames } from '../redux/actions/gamesAction';
import {useDispatch, useSelector} from 'react-redux';

const Home = () => {

  const {games} = useSelector(state => state.getGames);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGames());
  },[dispatch])

  return (
    <div>
        <Navbar/>
        <Banner/>
        <NewReleaseGame gamesData={games}/>
    </div>
  )
}

export default Home