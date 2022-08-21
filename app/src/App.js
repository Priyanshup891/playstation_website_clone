import React from 'react';
import Home from './Components/Home';
import SignIn from './Components/SignIn/SignIn';
import {BrowserRouter,Routes,Route} from 'react-router-dom';

const App = () => {
  return (
    
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/signIn' element={<SignIn/>}/>
    </Routes>
    </BrowserRouter>

  )
}

export default App;