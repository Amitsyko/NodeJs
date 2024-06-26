const JWT = require("jsonwebtoken");
const secret = "$Amit$yko";

/*--------This is Object------------*/
function createTokenForUser(user){
    const payload = {
        _id: user.id,
        fullname: user.fullname,
        email: user.email,
        profileImageURL: user.profileImageURL,
        role: user.role,
    };
    const token = JWT.sign(payload, secret);
    return token;
}

function validateToken(token){
    const payload = JWT.verify(token, secret);
    return payload;
}

module.exports = {
    createTokenForUser,
    validateToken
}