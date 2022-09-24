import User from "../model/user_schema.js";
import Game from "../model/games_schema.js";
import paytmcheksum from "../paytm/PaytmChecksum.js";
import { paytmMerchantKey, paytmParams } from "../index.js";
import formidable from 'formidable';
import https from 'https';

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

export const addPayment = async (req, res) => {
  try {
    let paytmChecksum = await paytmcheksum.generateSignature(
      paytmParams,
      paytmMerchantKey
    );
    let params = {
      ...paytmParams,
      CHECKSUMHASH: paytmChecksum,
    };

    res.status(200).json(params);
  } catch (error) {
    res.status(500).json("error", error.message);
  }
};

export const paytmResponse = async (req, res) =>{
  const form = new formidable.IncomingForm();
  let paytmChecksum = req.body.CHECKSUMHASH;
  delete req.body.CHECKSUMHASH;
  let isVerifySignature = paytmcheksum.verifySignature(req.body, paytmMerchantKey, paytmChecksum);
  if(isVerifySignature){
    let paytmParams = {};
    paytmParams['MID'] = req.body.MID;
    paytmParams['ORDER_ID'] =req.body.ORDER_ID;

    paytmcheksum.generateSignature(paytmParams, paytmMerchantKey).then(function(checksum){
      paytmParams['CHECKSUMHASH'] = checksum;

      let post_data = JSON.stringify(paytmParams);

      let options = {
        hostname: "securegw-stage.paytm.in",
        port: 443,
        path:'/order/status',
        headers: {
          'Content-Type':'application/json',
          'Content-Length': post_data.length
        }
      }

      let resData = "";
      let post_req = https.request(options, function(post_res){
        post_res.on("data", function(chunk){
          resData += chunk;
        });

        post_res.on("end", function(){
          let result = JSON.parse(resData);
          res.redirect("http://localhost:3000/")
        })
      })

      post_req.write(post_data);
      post_req.end();

    })
  } else {
    console.log("Checksum Mismatched");
  }
}