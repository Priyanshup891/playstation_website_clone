import User from "../model/user_schema.js";
import Game from "../model/games_schema.js";

export const userSignUp = async (req, res) => {
  try {
    const exist = await User.findOne({ username: req.body.username });
    if (exist) {
      return res.status(401).json({ message: "username already exist!" });
    }

    const user = req.body;
    const newUser = new User(user);
    await newUser.save();
    res.status(200).json({ message: user });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

export const userSignIn = async (req, res) => {
  try {
    const username = req.body.username;
    const password = req.body.password;

    let user = await User.findOne({ username: username, password: password });
    if (user) {
      return res.status(200).json(`${username} signIn successfull`);
    } else {
      return res.status(401).json("Invalid Login");
    }
  } catch (error) {
    res.status(500).json("error", error.message);
  }
};

export const getGames = async (req, res) => {
  try {
    const game = await Game.find({});
    res.status(200).json(game);
  } catch (error) {
    res.status(500).json("error", error.message);
  }
};

export const getGameById = async (req, res) => {
  try {
    const id = req.params.id;
    const game = await Game.findOne({ _id: id });
    res.status(200).json(game);
  } catch (error) {
    res.status(500).json("error", error.message);
  }
};
