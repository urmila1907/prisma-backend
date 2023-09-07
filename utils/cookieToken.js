const jwtToken = require("../helpers/JwtToken");

const cookieToken = (user,res)=>{
  const token = jwtToken(user.id);
  const options = {
    expires: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000),
    httpOnly: true,
  };

  // Nullify the password if it is not being given to the user --> user.password = undefined;

  res.status(200).cookie("token", token, options).json({
    success: true,
    token,
    user,
  });
}

module.exports = cookieToken;
