import React from "react";
import Home from "./Components/Home";
import SignIn from "./Components/SignIn/SignIn";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GameDetails from "./Components/GameDetails/GameDetails";
import Navbar from "./Components/Home/Navbar";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route
          path="/detail/:id"
          element={
            <>
              <Navbar />
              <GameDetails />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
