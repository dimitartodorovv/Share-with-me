const jwt = require('jsonwebtoken');
const {SECRET_KEY} = require("../config/configVer");

function tokenMaker(data) {

    let payload = data;
    let expireIn = "2d";

   const token =  jwt.sign(payload,SECRET_KEY,expireIn,(err,data) => {
       if(err){
           return err
       }
        return data
   });

   return token
};

module.exports = tokenMaker;