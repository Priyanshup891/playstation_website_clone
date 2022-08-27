import mongoose from "mongoose";

const gamesSchema = new mongoose.Schema({
    id:{
        type:String,
        required:true,
        unique:true
    },
    poster_path: String,
    background_path:String,
    title:String,
    price:String,
    release_date:String,
    question:String,
    answer:String,
    overview:String,
    images:Array,
    trailer_path:String
});

const Game = mongoose.model('game', gamesSchema);

export default Game;