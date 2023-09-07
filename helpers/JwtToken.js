const jwt = require("jsonwebtoken");

const jwtToken = (userId)=>{
    return jwt.sign({ userId: userId },process.env.JWT_SECRET,{expiresIn:'1 day'});
}

module.exports = jwtToken;