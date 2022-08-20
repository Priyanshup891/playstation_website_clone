
import { gamesData } from "./Constant/games.js";
import Game from "./model/games_schema.js";

const DefaultData = async () => {
    try{
       await Game.insertMany(gamesData);
        console.log("Data inserted");
    }catch(error){
        console.log(error.message);
    }
}

export default DefaultData;