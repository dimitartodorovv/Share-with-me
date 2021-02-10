const sessionUser = require("../mongooseModule/userSession");

const bcrypt = require("bcrypt");

const {REGEX_EMAIL,SALT} = require("../config/configVer");

async function registration(data) {

    let {email,username,password,rePassword} = data;
    
        let users =  await sessionUser.find().select("username");
        let emails = await sessionUser.find().select("email");

        let searchForUser = users.find(user => user == username);
        let searchForEmail = emails.find(email => email == email);
    
        if(searchForUser) {
            throw {message: "Try another username! :)"}
        }
        if(searchForEmail){
            throw {message: "Try another email! :)"}
        }
        if(email.length < 3) {
            throw {message: "The email is too short"};
        }
        if(!REGEX_EMAIL.test(email)) {
            throw {message: "Email is not currect!"}
        }
        if(password.length < 6) {
            throw {message: "The passowrd is too short!"}
        }
        if(password != rePassword) {
            throw {message: "The password is wrong! Try again!"}
        }

        let hashPass = await bcrypt.hash(password, SALT);

        const newUser = new sessionUser({email,username,hashPass})
       
        return newUser.save();
        
};



module.exports = {
    registration,
}